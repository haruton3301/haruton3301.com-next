import { ArticleList } from "@/components/ArticleList"
import { Breadcrumb } from "@/components/Breadcrumb"
import { MetaTags } from "@/components/MetaTags"
import { PageTitle } from "@/components/PageTitle"
import { MainVisual } from "@/contents/MainVisual"
import { client, TypePostSkeleton } from "@/libs/contentful"
import { EntryCollection } from "contentful"

export default async function Home() {
  const { items: posts }: EntryCollection<TypePostSkeleton> =
    await client.getEntries<TypePostSkeleton>({
      limit: 5,
      content_type: "article",
      order: ["-sys.createdAt"],
    })

  return (
    <>
      <MetaTags description="忘れないようにメモを残します" type="blog" />
      <Breadcrumb breadcrumbs={[]} />
      <MainVisual />
      <PageTitle title="おすすめ記事" />
      <ArticleList posts={posts} />
    </>
  )
}
