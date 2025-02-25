import { ITagFields } from "@/libs/contentful"
import Link from "next/link"

type Props = {
  tags: Array<ITagFields>
}

export const TagList: React.FC<Props> = ({ tags }) => {
  return (
    <section className="max-w-4xl mx-auto mt-5">
      <article className="bg-white px-8 py-7">
        <ul className="flex flex-wrap">
          {tags &&
            tags.map((tag) => {
              const { name, slug } = tag
              const href = `/tags/${slug}`
              return (
                <li
                  key={tag.name}
                  className="btn rounded-full mx-1 my-2 bg-stone-100 border-none px-8 shadow-md hover:bg-stone-200 normal-case text-lg"
                >
                  <Link href={href} className="text-stone-900 no-underline">
                    {name}
                  </Link>
                </li>
              )
            })}
        </ul>
      </article>
    </section>
  )
}
