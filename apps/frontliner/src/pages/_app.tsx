import type { ReactElement, ReactNode } from 'react'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import 'style' // import tailwind-css from dependencies
import dynamic from 'next/dynamic'

// dynamic import
const Snackbar = dynamic(() => import('ui').then((module) => module.Snackbar))

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  return getLayout(
    <>
      <Component {...pageProps} />
      <Snackbar />
    </>
  )
}

export default App
