import type { Entry } from 'contentful'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import Link from 'next/link'
import { BsFillTagFill } from 'react-icons/bs'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import type { IPostFields } from '~/libs/contentful'

import { CustomCode } from './CustomCode'

type Props = {
  post: Entry<IPostFields>
}

export const Article: React.FC<Props> = (props) => {
  const { post } = props
  const components = {
    code: CustomCode
  }
  const title = post.fields.title
  const createdAt = post.sys.createdAt
  const updatedAt = post.sys.updatedAt
  const tags = post.fields.tags
  const contentMarkdown = post.fields.contentMarkdown

  const createdDateTimeText = format(new Date(createdAt), `yyyy-MM-dd'T'HH:mm:ss'Z'`)
  const createdAtText = format(new Date(createdAt), 'yyyy年MM月dd日', { locale: ja })
  const updatedDateTimeText = format(new Date(updatedAt), `yyyy-MM-dd'T'HH:mm:ss'Z'`)
  const updatedAtText = format(new Date(updatedAt), 'yyyy年MM月dd日', { locale: ja })
  return (
    <>
      <section className="max-w-4xl mx-auto mb-5">
        <article className="bg-white px-3 md:px-8 py-7">
          <section className="text-md text-stone-500">
            <span className="mr-3">
              投稿日
              <time dateTime={createdDateTimeText} itemProp="datepublished">
                {createdAtText}
              </time>
            </span>
            <span>
              更新日
              <time dateTime={updatedDateTimeText} itemProp="datepublished">
                {updatedAtText}
              </time>
            </span>
          </section>
          <section className="py-3">
            <h1 className="text-3xl font-bold leading-10 text-stone-800 break-all">{title}</h1>
          </section>
          <section className="flex items-center text-stone-500">
            <span className="text-2xl mr-3">
              <BsFillTagFill />
            </span>
            <ul className="flex items-center text-md">
              {tags.map((tag, i) => {
                const separater = i !== tags.length - 1 ? ', ' : ''
                const tagName = `${tag.name}${separater}`
                const tagSlug = tag.slug
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
          <section className="article-single">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components}>
              {contentMarkdown}
            </ReactMarkdown>
          </section>
        </article>
      </section>
    </>
  )
}
