import { redirect } from 'next/navigation'

import { Locale } from '@/shared/config'

// This page only renders when the app is built statically (output: 'export')
const RootPage = (): void => {
  redirect(`/${Locale.Default}`)
}

export default RootPage
