import Head from 'next/head'
import { useState } from 'react'

import { TagsProvider } from '~/context/tags'

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

  const [isOpen, setIsOpen] = useState(false)

  const titleText = title ? `${title} | はるとんのブログ` : 'はるとんのブログ'
  const urlText = url ? `https://haruton3301.com/${url}` : 'https://haruton3301.com'
  return (
    <TagsProvider>
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
      <div className="flex flex-col min-h-screen bg-stone-100">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className="pb-5 flex-1">{children}</main>

        <Footer />
      </div>

      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
    </TagsProvider>
  )
}
