import type { Entry, EntryCollection } from 'contentful'
import type { GetStaticProps, NextPage } from 'next/types'

import { ArticleList } from '~/components/ArticleList'
import { Breadcrumb } from '~/components/Breadcrumb'
import { PageTitle } from '~/components/PageTitle'
import { Layout } from '~/contents/Layout'
import { MainVisual } from '~/contents/MainVisual'
import type { IPostFields } from '~/libs/contentful'
import { buildClient } from '~/libs/contentful'

const client = buildClient()

type Props = {
  posts: Entry<IPostFields>[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { items }: EntryCollection<IPostFields> = await client.getEntries({
    limit: 5,
    content_type: 'article',
    order: '-sys.createdAt'
  })

  return {
    props: { posts: items }
  }
}

const Home: NextPage<Props> = (props) => {
  const { posts } = props

  return (
    <Layout title="" description="忘れないようにメモを残します" type="blog">
      <Breadcrumb breadcrumbs={[{ name: 'Home', slug: '' }]} />
      <MainVisual />
      <PageTitle title="おすすめ記事" />
      <ArticleList posts={posts} />
    </Layout>
  )
}

export default Home
