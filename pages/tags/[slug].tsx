import type { Entry, EntryCollection, Tag } from 'contentful'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next/types'
import type { ParsedUrlQuery } from 'querystring'

import { ArticleList } from '~/components/ArticleList'
import { Breadcrumb } from '~/components/Breadcrumb'
import { PageTitle } from '~/components/PageTitle'
import { Layout } from '~/contents/Layout'
import type { IPostFields } from '~/libs/contentful'
import { buildClient } from '~/libs/contentful'
import { getTagName } from '~/libs/tags'

const client = buildClient()

type Props = {
  tag: Tag
  posts: Entry<IPostFields>[]
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { items } = await client.getTags()

  const paths = items.map((tag) => ({
    params: {
      slug: tag.sys.id
    }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams

  const { items: tags } = await client.getTags()

  let posts
  {
    const { items }: EntryCollection<IPostFields> = await client.getEntries({
      'metadata.tags.sys.id[all]': slug,
      content_type: 'article',
      order: '-sys.createdAt'
    })
    posts = items.map((post) => {
      post.fields.tags = post.metadata.tags.map((tag) => {
        const { id } = tag.sys
        return {
          slug: id,
          name: getTagName(id, tags)
        }
      })
      return post
    })
  }

  let tag
  {
    tag = tags.find((tag) => tag.sys.id === slug) as Tag
  }

  return {
    props: { posts, tag }
  }
}

const TagSingle: NextPage<Props> = (props) => {
  const { posts, tag } = props

  const tagName = tag.name
  const tagSlug = tag.sys.id

  return (
    <Layout title={tagName} description={`タグ${tagName}の一覧ページです。`} type="article" url={`articles${tagSlug}`}>
      <Breadcrumb
        breadcrumbs={[
          { name: 'Home', slug: '' },
          { name: 'タグ一覧', slug: 'tags' },
          { name: tagName, slug: tagSlug }
        ]}
      />
      <PageTitle title={tagName} />
      <ArticleList posts={posts} />
    </Layout>
  )
}

export default TagSingle
