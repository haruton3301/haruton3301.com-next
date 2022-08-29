import React from 'react'
import { AppProps } from 'next/app'

import '~/styles/globals.scss'

interface MyAppProps extends AppProps {}

function MyApp(props: MyAppProps) {
  const { Component } = props
  return <Component />
}

export default MyApp
