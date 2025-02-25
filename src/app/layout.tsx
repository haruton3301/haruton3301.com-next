import Scroll from "@/components/Scroll"
import { Layout } from "@/contents/Layout"
import { TagsProvider } from "@/context/tags"
import "@/styles/globals.scss"
import clsx from "clsx"
import { Noto_Sans_JP } from "next/font/google"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta
          property="google-site-verification"
          content="juL8UZi2OMOrnMylA7f6VtmcuijRVXmd5eozMARyKKA"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={clsx(notoSansJP.variable, "font-sans")}>
        <Scroll />
        <TagsProvider>
          <Layout>{children}</Layout>
        </TagsProvider>
      </body>
    </html>
  )
}
