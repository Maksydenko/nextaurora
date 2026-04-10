import { type JSX } from 'react'

import { ShellView } from '@/shared/ui'

import { uiMapBreadcrumbs, uiMapViewPlaces } from '../../../model'
import { MapViewMap } from './parts'

import s from './MapView.module.scss'

export const MapView = (): JSX.Element => (
  <ShellView
    breadcrumbs={uiMapBreadcrumbs}
    description={
      <>
        {'Clustered map markers built on '}<code>@react-google-maps/api</code>{' and '}<code>@googlemaps/markerclusterer</code>.
      </>
    }
    title="Map"
  >
    <div className={s.mapView__container}>
      <MapViewMap
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        places={uiMapViewPlaces}
        zoom={12}
      />
    </div>
  </ShellView>
)
