import type { GetStaticProps, NextPage } from 'next/types'

import { Breadcrumb } from '~/components/Breadcrumb'
import { PageTitle } from '~/components/PageTitle'
import { TagList } from '~/components/TagList'
import { Layout } from '~/contents/Layout'
import { buildClient } from '~/libs/contentful'

const client = buildClient()

type Props = {
  tags: { name: string; slug: string }[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { items } = await client.getTags()

  const tags = items.map((tag) => {
    return {
      name: tag.name,
      slug: tag.sys.id
    }
  })

  return {
    props: { tags }
  }
}

const Tags: NextPage<Props> = (props) => {
  const { tags } = props

  return (
    <Layout title="タグ一覧" description="タグ一覧ページです。" type="blog" url="tags">
      <Breadcrumb
        breadcrumbs={[
          { name: 'Home', slug: '' },
          { name: 'タグ一覧', slug: 'tags' }
        ]}
      />
      <PageTitle title="タグ一覧" />
      <TagList tags={tags} />
    </Layout>
  )
}

export default Tags
