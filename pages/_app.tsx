import '~/styles/globals.scss'

import type { AppProps } from 'next/app'

type MyAppProps = AppProps

export const MyApp = (props: MyAppProps) => {
  const { Component, pageProps } = props
  return <Component {...pageProps} />
}

export default MyApp
