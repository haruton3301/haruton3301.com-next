import type { Entry } from 'contentful'

import type { IPostFields } from '~/libs/contentful'

import { ArticleCard } from './ArticleCard'

type Props = {
  posts: Entry<IPostFields>[]
}

export const ArticleList: React.FC<Props> = (props) => {
  const { posts } = props

  return (
    <>
      <section className="max-w-4xl mx-auto">
        {posts &&
          posts.map((post: Entry<IPostFields>) => {
            const title = post.fields.title
            const slug = post.fields.slug
            const createdAt = post.sys.createdAt
            const tags = post.fields.tags
            return <ArticleCard key={title} title={title} slug={slug} createdAt={createdAt} tags={tags} />
          })}
      </section>
    </>
  )
}
