import '~/styles/globals.scss'

import type { AppProps } from 'next/app'

type MyAppProps = AppProps

function MyApp(props: MyAppProps) {
  const { Component } = props
  return <Component />
}

export default MyApp
