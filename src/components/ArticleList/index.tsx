import type { TypePostSkeleton } from "@/libs/contentful"
import type { Entry } from "contentful"
import { ArticleCard } from "./ArticleCard"

type Props = {
  posts: Array<Entry<TypePostSkeleton>>
}

export const ArticleList: React.FC<Props> = ({ posts }) => {
  return (
    <section className="max-w-4xl mx-auto">
      {posts &&
        posts.map((post: Entry<TypePostSkeleton>) => {
          const title = String(post.fields.title)
          const slug = String(post.fields.slug)
          const createdAt = String(post.sys.createdAt)
          const tags = post.metadata.tags.map((tag) => tag.sys.id)

          return (
            <ArticleCard
              key={slug}
              title={title}
              slug={slug}
              createdAt={createdAt}
              tags={tags}
            />
          )
        })}
    </section>
  )
}
