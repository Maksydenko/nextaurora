/**
 * Internal props used by the map rendering component.
 */
export interface MapInnerProps {
  apiKey: string
  className?: string
  markerIconUrl: string
  places: MapPlace[]
  zoom?: number
}

/**
 * A single place rendered on the map.
 */
export interface MapPlace {
  id: string
  lat: number
  lng: number
  title: string
}

/**
 * Public props for the map wrapper component.
 */
export interface MapProps {
  apiKey?: string
  className?: string
  markerIconUrl?: string
  places: MapPlace[]
  zoom?: number
}
