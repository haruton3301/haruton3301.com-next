import { siteTitle, siteUrl } from "@/libs/constants"

type MetaTagsProps = {
  title?: string
  description: string
  url?: string
  keywords?: string
  type: string
}

export const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  url,
  keywords,
  type,
}) => {
  const titleText = title ? `${title} | ${siteTitle}` : siteTitle
  const urlText = url ? `${siteUrl}/${url}` : siteUrl

  return (
    <>
      <title>{titleText}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:url" content={urlText} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="はるとんのブログ" />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={`${siteUrl}/ogp.png`} />
      <meta property="twitter:card" content="summary" />
      <meta property="format-detection" content="telephone=no" />
    </>
  )
}
