"use client"

import { useTags } from "@/context/tags"
import { TypePostSkeleton } from "@/libs/contentful"
import { getDateText, getDateTimeText } from "@/libs/date"
import type { Entry } from "contentful"
import Link from "next/link"
import { BsFillTagFill } from "react-icons/bs"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import { CustomCode } from "./CustomCode"

type Props = {
  post: Entry<TypePostSkeleton>
}

export const Article: React.FC<Props> = ({ post }) => {
  const { getTagName } = useTags()
  const components = {
    code: CustomCode,
  }
  const title = String(post.fields.title)
  const createdAt = post.sys.createdAt
  const updatedAt = post.sys.updatedAt
  const tags = post.metadata.tags.map((tag) => tag.sys.id)
  const contentMarkdown = String(post.fields.contentMarkdown)

  const createdDateTimeText = getDateTimeText(createdAt)
  const createdAtText = getDateText(createdAt)
  const updatedDateTimeText = getDateTimeText(updatedAt)
  const updatedAtText = getDateText(updatedAt)

  return (
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
          <h1 className="text-3xl font-bold leading-10 text-stone-800 break-all">
            {title}
          </h1>
        </section>
        <section className="flex items-center text-stone-500">
          <span className="text-2xl mr-3">
            <BsFillTagFill />
          </span>
          <ul className="flex items-center text-md">
            {tags.map((tag, i) => {
              const separater = i !== tags.length - 1 ? ", " : ""
              const tagName = `${getTagName(tag)}${separater}`
              const tagHref = `/tags/${tag}`
              return (
                <li key={tagName} className="mr-2">
                  <Link
                    href={tagHref}
                    className="hover:underline relative z-10"
                  >
                    {tagName}
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
  )
}
