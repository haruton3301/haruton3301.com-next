import Head from 'next/head'

import { Footer } from './Footer'
import { Header } from './Header'
import { Navigation } from './Navigation'

type Props = {
  title: string
  description: string
  url?: string
  keywords?: string
  children: React.ReactNode
  type: string
}

export const Layout: React.FC<Props> = (props) => {
  const { children, description, keywords, title, type, url } = props

  const titleText = title ? `${title} | はるとんのブログ` : 'はるとんのブログ'
  const urlText = url ? `https://haruton3301.com/${url}` : 'https://haruton3301.com'
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta property="og:url" content={urlText} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="はるとんのブログ" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:image" content="https://haruton3301.com/ogp.png" />
        <meta property="twitter:card" content="summary" />
        <meta property="format-detection" content="telephone=no" />
        <meta property="google-site-verification" content="juL8UZi2OMOrnMylA7f6VtmcuijRVXmd5eozMARyKKA" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Header />

          <main className="bg-stone-100 pb-5">{children}</main>

          <Footer />
        </div>

        <Navigation />
      </div>
    </>
  )
}
