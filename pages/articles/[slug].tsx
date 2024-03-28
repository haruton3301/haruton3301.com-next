import type { Entry, EntryCollection } from 'contentful'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next/types'
import type { ParsedUrlQuery } from 'querystring'

import { Article } from '~/components/Article'
import { ArticleList } from '~/components/ArticleList'
import { Breadcrumb } from '~/components/Breadcrumb'
import { PageTitle } from '~/components/PageTitle'
import { Layout } from '~/contents/Layout'
import type { IPostFields } from '~/libs/contentful'
import { buildClient } from '~/libs/contentful'
import { getTagName } from '~/libs/tags'

const client = buildClient()

type Props = {
  post: Entry<IPostFields>
  relatedPosts: Entry<IPostFields>[]
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { items }: EntryCollection<IPostFields> = await client.getEntries({
    content_type: 'article',
    order: '-sys.createdAt'
  })

  const posts = items

  const paths = posts.map((post) => ({
    params: {
      slug: post.fields.slug
    }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams
  const { items }: EntryCollection<IPostFields> = await client.getEntries({
    content_type: 'article',
    'fields.slug': slug,
    limit: 1
  })

  const { items: tags } = await client.getTags()

  const _post = items[0]
  _post.fields.tags = _post.metadata.tags.map((tag) => {
    const { id } = tag.sys
    return {
      slug: id,
      name: getTagName(id, tags)
    }
  })
  const post = _post

  let tagQuery = ''
  for (let i = 0; i < post.fields.tags.length; i++) {
    const separater = i !== post.fields.tags.length - 1 ? ', ' : ''
    tagQuery += `${post.fields.tags[i].slug}${separater}`
  }

  const { items: _relatedPosts } = (await client.getEntries({
    content_type: 'article',
    order: '-sys.createdAt',
    'metadata.tags.sys.id[in]': tagQuery,
    limit: 6
  })) as EntryCollection<IPostFields>

  const relatedPosts = _relatedPosts
    .map((post) => {
      post.fields.tags = post.metadata.tags.map((tag) => {
        const { id } = tag.sys
        return {
          slug: id,
          name: getTagName(id, tags)
        }
      })
      return post
    })
    .filter((item) => !(item.fields.slug === slug))

  return {
    props: { post, relatedPosts }
  }
}

const ArticleSingle: NextPage<Props> = (props) => {
  const { post, relatedPosts } = props

  return (
    <Layout
      title={post.fields.title}
      description={post.fields.description}
      type="article"
      url={`articles${post.fields.slug}`}
      keywords={post.fields.keywords}
    >
      <Breadcrumb
        breadcrumbs={[
          { name: 'Home', slug: '' },
          { name: '記事一覧', slug: 'articles' },
          { name: post.fields.title, slug: post.fields.slug }
        ]}
      />
      <Article post={post} />
      {relatedPosts.length > 0 && <PageTitle title="関連記事" />}
      <ArticleList posts={relatedPosts} />
      <div></div>
    </Layout>
  )
}

export default ArticleSingle
