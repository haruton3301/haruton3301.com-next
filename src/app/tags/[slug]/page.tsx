import { ArticleList } from "@/components/ArticleList"
import { Breadcrumb } from "@/components/Breadcrumb"
import { MetaTags } from "@/components/MetaTags"
import { PageTitle } from "@/components/PageTitle"
import { client, type TypePostSkeleton } from "@/libs/contentful"
import type { EntryCollection, Tag } from "contentful"

export async function generateStaticParams() {
  const { items } = await client.getTags()

  return items.map((tag) => ({
    slug: tag.sys.id,
  }))
}

export default async function TagSingle({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { items: tags } = await client.getTags()
  const tag = tags.find((tag) => tag.sys.id === slug) as Tag
  const tagName = tag.name
  const tagSlug = tag.sys.id

  const { items: posts }: EntryCollection<TypePostSkeleton> =
    await client.getEntries<TypePostSkeleton>({
      "metadata.tags.sys.id[all]": [slug],
      content_type: "article",
      order: ["-sys.createdAt"],
    })

  return (
    <>
      <MetaTags
        title={tagName}
        description={`タグ${tagName}の一覧ページです。`}
        type="article"
        url={`articles${tagSlug}`}
      />
      <Breadcrumb
        breadcrumbs={[
          { name: "タグ一覧", slug: "tags" },
          { name: tagName, slug: tagSlug },
        ]}
      />
      <PageTitle title={tagName} />
      <ArticleList posts={posts} />
    </>
  )
}
