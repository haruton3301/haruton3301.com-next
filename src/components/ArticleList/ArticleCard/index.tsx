"use client"

import { useTags } from "@/context/tags"
import { getDateText, getDateTimeText } from "@/libs/date"
import Link from "next/link"
import { BsFillTagFill } from "react-icons/bs"

type Props = {
  title: string
  createdAt: string
  slug: string
  tags: Array<string>
}

export const ArticleCard: React.FC<Props> = ({
  createdAt,
  slug,
  tags,
  title,
}) => {
  const { getTagName } = useTags()
  const href = `/articles/${slug}`
  const dateTimeText = getDateTimeText(createdAt)
  const createdAtText = getDateText(createdAt)

  return (
    <article className="bg-white mt-5 px-3 md:px-6 py-5 relative">
      <Link
        href={href}
        scroll={true}
        className="absolute top-0 bottom-0 left-0 right-0"
      />
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
            const separater = i !== tags.length - 1 ? ", " : ""
            const tagName = `${getTagName(tag)}${separater}`
            const tagSlug = tag
            const tagHref = `/tags/${tagSlug}`
            return (
              <li key={tagName} className="mr-2">
                <Link href={tagHref} className="hover:underline relative z-10">
                  {tagName}
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </article>
  )
}
