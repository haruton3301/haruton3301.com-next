import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import Link from 'next/link'
import { BsFillTagFill } from 'react-icons/bs'

import type { IChildTagFields } from '~/libs/contentful'

type Props = {
  title: string
  createdAt: string
  slug: string
  tags: IChildTagFields[]
}

export const ArticleCard: React.FC<Props> = (props) => {
  const { createdAt, slug, tags, title } = props

  const href = `/articles/${slug}`
  const dateTimeText = format(new Date(createdAt), `yyyy-MM-dd'T'HH:mm:ss'Z'`)
  const createdAtText = format(new Date(createdAt), 'yyyy年MM月dd日', { locale: ja })
  return (
    <>
      <article className="bg-white mt-5 px-3 md:px-6 py-5 relative">
        <Link href={href} scroll={true}>
          <a className="absolute top-0 bottom-0 left-0 right-0"></a>
        </Link>
        <section className="text-sm text-stone-500">
          <time dateTime={dateTimeText} itemProp="datepublished">
            {createdAtText}
          </time>
          に投稿
        </section>
        <section className="py-1">
          <h2 className="text-2xl font-bold leading-9 text-stone-800">{title}</h2>
        </section>
        <section className="flex items-center text-stone-500">
          <span className="text-md mr-2">
            <BsFillTagFill />
          </span>
          <ul className="flex items-center text-sm">
            {tags.map((tag, i) => {
              const separater = i !== tags.length - 1 ? ', ' : ''
              const tagName = `${tag.fields.name}${separater}`
              const tagSlug = tag.fields.slug
              const tagHref = `/tags/${tagSlug}`
              return (
                <li key={tagName} className="mr-2">
                  <Link href={tagHref}>
                    <a className="hover:underline relative z-10">{tagName}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      </article>
    </>
  )
}
