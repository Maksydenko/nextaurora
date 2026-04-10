import { type ReactNode } from 'react'

import { type Metadata } from 'next'

export const metadata: Metadata = {
  manifest: '/manifest.webmanifest'
}

interface RootLayoutProps {
  children: ReactNode
}

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
const RootLayout = ({ children }: RootLayoutProps): ReactNode => children

export default RootLayout
