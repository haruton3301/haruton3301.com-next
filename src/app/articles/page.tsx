import { ArticleList } from "@/components/ArticleList"
import { Breadcrumb } from "@/components/Breadcrumb"
import { MetaTags } from "@/components/MetaTags"
import { PageTitle } from "@/components/PageTitle"
import { client, TypePostSkeleton } from "@/libs/contentful"
import { EntryCollection } from "contentful"

export default async function Home() {
  const { items: posts }: EntryCollection<TypePostSkeleton> =
    await client.getEntries<TypePostSkeleton>({
      content_type: "article",
      order: ["-sys.createdAt"],
    })

  return (
    <>
      <MetaTags
        title="記事一覧"
        description="記事一覧ページです。"
        type="blog"
        url="articles"
      />
      <Breadcrumb breadcrumbs={[{ name: "記事一覧", slug: "articles" }]} />
      <PageTitle title="記事一覧" />
      <ArticleList posts={posts} />
    </>
  )
}
