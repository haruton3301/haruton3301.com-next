import Head from 'next/head'

import { Navigation } from '../Navigation'
import { Footer } from './Footer'
import { Header } from './Header'

type Props = {
  title: string
  description: string
  url?: string
  children: React.ReactNode
}

export const Layout: React.FC<Props> = (props) => {
  const { children, description, title, url } = props

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:url" content="https://vgu.community" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={url || 'https://varygoodkun.net/wp-content/uploads/2021/09/ogb.png'} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Header />

          <main>{children}</main>

          <Footer />
        </div>

        <Navigation />
      </div>
    </>
  )
}
