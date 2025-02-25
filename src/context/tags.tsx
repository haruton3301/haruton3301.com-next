"use client"

import type { ITagFields } from "@/libs/contentful"
import { client } from "@/libs/contentful"
import type { TagCollection } from "contentful"
import { createContext, useContext, useEffect, useState } from "react"

export type TagsContextType = {
  tags: Array<ITagFields>
  getTagName: (id: string) => string
}

const TagsContext = createContext<TagsContextType | null>(null)

type Props = {
  children: React.ReactNode
}

export const TagsProvider: React.FC<Props> = ({ children }) => {
  const [tags, setTags] = useState<ITagFields[]>([])

  useEffect(() => {
    const fetchTags = async () => {
      const { items }: TagCollection = await client.getTags()
      setTags(
        items.map((item) => ({
          slug: item.sys.id,
          name: item.name,
        })),
      )
    }
    fetchTags()
  }, [])

  const getTagName = (slug: string) => {
    const tag = tags.find((tag) => tag.slug === slug)
    return tag?.name || ""
  }

  return (
    <TagsContext.Provider value={{ tags, getTagName }}>
      {children}
    </TagsContext.Provider>
  )
}

export const useTags = (): TagsContextType => useContext(TagsContext)!
