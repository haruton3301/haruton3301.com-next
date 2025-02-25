import type { Entry, EntryCollection } from "contentful"
import type { GetStaticProps, NextPage } from "next/types"

import { ArticleList } from "@/components/ArticleList"
import { Breadcrumb } from "@/components/Breadcrumb"
import { PageTitle } from "@/components/PageTitle"
import { Layout } from "@/contents/Layout"
import type { IPostFields } from "@/libs/contentful"
import { buildClient } from "@/libs/contentful"
import { getTagName } from "@/libs/tags"

const client = buildClient()

type Props = {
  posts: Entry<IPostFields>[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { items }: EntryCollection<IPostFields> = await client.getEntries({
    content_type: "article",
    order: "-sys.createdAt",
  })

  const { items: tags } = await client.getTags()

  const posts = items.map((post) => {
    post.fields.tags = post.metadata.tags.map((tag) => {
      const { id } = tag.sys
      return {
        slug: id,
        name: getTagName(id, tags),
      }
    })
    return post
  })

  return {
    props: { posts },
  }
}

const Articles: NextPage<Props> = (props) => {
  const { posts } = props

  return (
    <Layout
      title="記事一覧"
      description="記事一覧ページです。"
      type="blog"
      url="articles"
    >
      <Breadcrumb
        breadcrumbs={[
          { name: "Home", slug: "" },
          { name: "記事一覧", slug: "articles" },
        ]}
      />
      <PageTitle title="記事一覧" />
      <ArticleList posts={posts} />
    </Layout>
  )
}

export default Articles
