import { Breadcrumb } from "@/components/Breadcrumb"
import { MetaTags } from "@/components/MetaTags"
import { PageTitle } from "@/components/PageTitle"
import { TagList } from "@/components/TagList"
import { client } from "@/libs/contentful"

export default async function Tags() {
  const { items } = await client.getTags()
  const tags = items.map((tag) => {
    return {
      name: tag.name,
      slug: tag.sys.id,
    }
  })

  return (
    <>
      <MetaTags
        title="タグ一覧"
        description="タグ一覧ページです。"
        type="blog"
        url="tags"
      />
      <Breadcrumb breadcrumbs={[{ name: "タグ一覧", slug: "tags" }]} />
      <PageTitle title="タグ一覧" />
      <TagList tags={tags} />
    </>
  )
}
