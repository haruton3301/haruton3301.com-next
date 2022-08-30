import type { Entry, EntryCollection } from 'contentful'
import type { GetStaticProps, NextPage } from 'next/types'

import { Article } from '~/components/Article'
import { ArticleList } from '~/components/ArticleList'
import { Breadcrumb } from '~/components/Breadcrumb'
import { PageTitle } from '~/components/PageTitle'
import { Layout } from '~/contents/Layout'
import type { IPostFields, ITagFields } from '~/libs/contentful'
import { buildClient } from '~/libs/contentful'

const client = buildClient()

type Props = {
  tag: Entry<ITagFields>
  posts: Entry<IPostFields>[]
}

export const getStaticPaths = async () => {
  const { items }: EntryCollection<ITagFields> = await client.getEntries({
    content_type: 'tags',
    order: '-sys.createdAt'
  })

  const paths = items.map((tag) => ({
    params: {
      slug: tag.fields.slug
    }
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params

  let posts
  {
    const { items }: EntryCollection<IPostFields> = await client.getEntries({
      // 'fields.tags.sys.contentType.sys.id': 'tags', // ←これも必要
      'metadata.tags.sys.id[all]': slug,
      content_type: 'article',
      order: '-sys.createdAt'
    })
    posts = items
  }

  let tag
  {
    const { items }: EntryCollection<ITagFields> = await client.getEntries({
      limit: 1,
      content_type: 'tags',
      'fields.slug': slug,
      order: 'sys.createdAt'
    })
    tag = items[0]
    console.warn(tag)
  }

  return {
    props: { posts, tag }
  }
}

const TagSingle: NextPage<Props> = (props) => {
  const { posts, tag } = props

  const tagName = tag.fields.name
  const tagSlug = tag.fields.slug

  return (
    <Layout title={tagName} description={`タグ${tagName}の一覧ページです。`} type="article" url={`articles${tagSlug}`}>
      <Breadcrumb
        breadcrumbs={[
          { name: 'Home', slug: '' },
          { name: '記事一覧', slug: 'articles' },
          { name: tagName, slug: tagSlug }
        ]}
      />
      <PageTitle title={tagName} />
      <ArticleList posts={posts} />
    </Layout>
  )
}

export default TagSingle
