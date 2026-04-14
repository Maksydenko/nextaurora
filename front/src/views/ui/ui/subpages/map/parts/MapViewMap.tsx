'use client'

import { type JSX } from 'react'

import dynamic from 'next/dynamic'

import { type MapPlace } from '@/shared/ui/Map/Map'

const MapLazy = dynamic(
  () => import('@/shared/ui/Map/Map').then(mod => ({ default: mod.Map })),
  {
    loading: () => <p>Loading map…</p>,
    ssr: false
  }
)

export interface MapViewMapProps {
  apiKey: string | undefined
  places: MapPlace[]
  zoom: number
}

export const MapViewMap = ({
  apiKey,
  places,
  zoom
}: MapViewMapProps): JSX.Element => (
  <MapLazy apiKey={apiKey} places={places} zoom={zoom} />
)
