import "@/styles/globals.scss"

import type { AppProps } from "next/app"

import { Loading } from "@/components/Loading"

type MyAppProps = AppProps

export const MyApp = (props: MyAppProps) => {
  const { Component, pageProps } = props

  return (
    <>
      <Loading />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
