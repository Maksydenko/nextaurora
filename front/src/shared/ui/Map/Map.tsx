'use client'

import { type JSX, useCallback, useEffect, useState } from 'react'

import { clsx } from 'clsx'

import { MarkerClusterer } from '@googlemaps/markerclusterer'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

import mapStyles from './mapStyles.json'

import s from './Map.module.scss'

const MAP_STYLES = mapStyles as google.maps.MapTypeStyle[]

const DEFAULT_CENTER: google.maps.LatLngLiteral = { lat: 50.4501, lng: 30.5234 }

const markerPinDataUrl = (): string => {
  const fill = 'hsl(212 61% 45%)'
  const stroke = 'hsl(212 61% 32%)'
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="48" viewBox="0 0 36 48"><path fill="${fill}" stroke="${stroke}" stroke-width="1" d="M18 1C10.3 1 4 7.1 4 14.8c0 8.4 11.2 21.4 13.4 23.8.4.4 1 .6 1.6.6s1.2-.2 1.6-.6C22.8 36.2 34 23.2 34 14.8 34 7.1 27.7 1 20 1h-2z"/><circle cx="18" cy="15" r="5" fill="#fff"/></svg>`

  return `data:image/svg+xml;base64,${btoa(svg)}`
}

const DEFAULT_MARKER_ICON = markerPinDataUrl()

const escapeHtml = (value: string): string =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

const clusterIconDataUrl = (): string => {
  const fill = 'hsl(212 61% 45%)'
  const stroke = 'hsl(212 61% 32%)'
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">
    <circle cx="26" cy="26" r="22" fill="${fill}" stroke="${stroke}" stroke-width="2" opacity="0.95"/>
    <circle cx="26" cy="26" r="16" fill="${fill}" opacity="0.35"/>
  </svg>`

  return `data:image/svg+xml;base64,${btoa(svg)}`
}

export interface MapPlace {
  id: string
  lat: number
  lng: number
  title: string
}

export interface MapProps {
  apiKey?: string
  className?: string
  markerIconUrl?: string
  places: MapPlace[]
  zoom?: number
}

interface MapInnerProps {
  apiKey: string
  className?: string
  markerIconUrl: string
  places: MapPlace[]
  zoom?: number
}

const MapInner = ({
  apiKey,
  className,
  markerIconUrl,
  places,
  zoom = 12
}: MapInnerProps): JSX.Element => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    id: 'nextaurora-google-maps',
    version: 'weekly'
  })

  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null)

  const onMapLoad = useCallback((instance: google.maps.Map) => {
    setMapInstance(instance)
  }, [])

  const onMapUnmount = useCallback(() => {
    setMapInstance(null)
  }, [])

  // Build markers, InfoWindow popups, and MarkerClusterer when the map or data changes.
  useEffect(() => {
    if (!mapInstance || !isLoaded) {
      return
    }

    const infoWindow = new google.maps.InfoWindow()
    const markers = places.map(place => {
      const marker = new google.maps.Marker({
        icon: {
          anchor: new google.maps.Point(18, 48),
          scaledSize: new google.maps.Size(36, 48),
          url: markerIconUrl
        },
        position: { lat: place.lat, lng: place.lng },
        title: place.title
      })

      marker.addListener('click', () => {
        infoWindow.setContent(
          `<div style="padding:8px 10px;font:14px/1.4 system-ui,sans-serif;max-width:220px">${escapeHtml(place.title)}</div>`
        )
        infoWindow.open({ anchor: marker, map: mapInstance })
      })

      return marker
    })

    const clusterer = new MarkerClusterer({
      map: mapInstance,
      markers,
      renderer: {
        render: ({ count, position }) =>
          new google.maps.Marker({
            icon: {
              anchor: new google.maps.Point(26, 26),
              scaledSize: new google.maps.Size(52, 52),
              url: clusterIconDataUrl()
            },
            label: {
              color: '#fff',
              fontSize: '13px',
              fontWeight: '600',
              text: String(count)
            },
            position,
            zIndex: 1_000_000 + count
          })
      }
    })

    return () => {
      infoWindow.close()

      for (const marker of markers) {
        google.maps.event.clearInstanceListeners(marker)
        marker.setMap(null)
      }

      clusterer.setMap(null)
    }
  }, [isLoaded, mapInstance, markerIconUrl, places])

  const center: google.maps.LatLngLiteral = !!places.length
    ? { lat: places[0].lat, lng: places[0].lng }
    : DEFAULT_CENTER

  if (loadError) {
    return (
      <div className={clsx(s.map, s.map_error, className)} role="alert">
        <p className={s.map__message}>Could not load Google Maps.</p>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className={clsx(s.map, s.map_loading, className)} role="status">
        <p className={s.map__message}>Loading map…</p>
      </div>
    )
  }

  return (
    <div className={clsx(s.map, className)}>
      <GoogleMap
        center={center}
        mapContainerClassName={s.map__viewport}
        options={{
          fullscreenControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          styles: MAP_STYLES
        }}
        zoom={zoom}
        onLoad={onMapLoad}
        onUnmount={onMapUnmount}
      />
    </div>
  )
}

export const Map = ({
  apiKey,
  className,
  markerIconUrl = DEFAULT_MARKER_ICON,
  places,
  zoom
}: MapProps): JSX.Element => {
  const key = apiKey?.trim()

  return (
    <MapInner
      apiKey={key || ''}
      className={className}
      markerIconUrl={markerIconUrl}
      places={places}
      zoom={zoom}
    />
  )
}
