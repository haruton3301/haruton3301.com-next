import type { EntriesQueries, EntryCollection } from "contentful"

import { Article } from "@/components/Article"
import { ArticleList } from "@/components/ArticleList"
import { Breadcrumb } from "@/components/Breadcrumb"
import { MetaTags } from "@/components/MetaTags"
import { PageTitle } from "@/components/PageTitle"
import { client, type TypePostSkeleton } from "@/libs/contentful"

export async function generateStaticParams() {
  const { items } = await client.getEntries<TypePostSkeleton>({
    content_type: "article",
    order: ["-sys.createdAt"],
  })

  return items.map((post) => ({ slug: post.fields.slug }))
}

export default async function ArticleSingle({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { items: posts }: EntryCollection<TypePostSkeleton> =
    await client.getEntries<TypePostSkeleton>({
      content_type: "article",
      "fields.slug": slug,
      limit: 1,
    } as EntriesQueries<TypePostSkeleton, undefined>)
  const post = posts[0]

  const tags = post.metadata.tags.map((tag) => tag.sys.id)
  const { items: relatedPosts }: EntryCollection<TypePostSkeleton> =
    await client.getEntries<TypePostSkeleton>({
      content_type: "article",
      order: ["-sys.createdAt"],
      "metadata.tags.sys.id[in]": tags,
      "fields.slug[ne]": slug,
      limit: 6,
    } as EntriesQueries<TypePostSkeleton, undefined>)

  return (
    <>
      <MetaTags
        title={String(post.fields.title)}
        description={String(post.fields.description)}
        type="article"
        url={`articles${post.fields.slug}`}
        keywords={String(post.fields.keywords)}
      />
      <Breadcrumb
        breadcrumbs={[
          { name: "記事一覧", slug: "articles" },
          { name: String(post.fields.title), slug: String(post.fields.slug) },
        ]}
      />
      <Article post={post} />
      {relatedPosts.length > 0 && <PageTitle title="関連記事" />}
      <ArticleList posts={relatedPosts} />
    </>
  )
}
