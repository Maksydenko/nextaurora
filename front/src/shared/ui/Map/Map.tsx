import type { JSX } from 'react'

import type { MapProps } from './map.interface'
import { MapInner } from './parts'

const markerPinDataUrl = (): string => {
  const fill = 'hsl(212 61% 45%)'
  const stroke = 'hsl(212 61% 32%)'
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="48" viewBox="0 0 36 48"><path fill="${fill}" stroke="${stroke}" stroke-width="1" d="M18 1C10.3 1 4 7.1 4 14.8c0 8.4 11.2 21.4 13.4 23.8.4.4 1 .6 1.6.6s1.2-.2 1.6-.6C22.8 36.2 34 23.2 34 14.8 34 7.1 27.7 1 20 1h-2z"/><circle cx="18" cy="15" r="5" fill="#fff"/></svg>`

  return `data:image/svg+xml;base64,${btoa(svg)}`
}

const DEFAULT_MARKER_ICON = markerPinDataUrl()

export type { MapPlace } from './map.interface'


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
