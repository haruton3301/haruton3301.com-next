import '~/styles/globals.scss'

import type { AppProps } from 'next/app'
import { Layout } from '~/components/Layout'

type MyAppProps = AppProps

export const MyApp = (props: MyAppProps) => {
  const { Component } = props
  return (
    <Layout title="はるとんのブログ" description="ああああ">
      <Component />
    </Layout>
  )
}

export default MyApp
