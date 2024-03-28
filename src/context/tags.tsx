import type { TagCollection } from 'contentful'
import { createContext, useEffect, useState } from 'react'

import type { ITagFields } from '~/libs/contentful'
import { buildClient } from '~/libs/contentful'

export type TagsContextType = {
  useTags: () => ITagFields[]
  getTagName: (id: string) => string
}

const TagsContext = createContext<TagsContextType | null>(null)

type Props = {
  children: React.ReactNode
}

export const TagsProvider: React.FC<Props> = ({ children }) => {
  const [tags, setTags] = useState<ITagFields[]>([])
  const client = buildClient()

  useEffect(() => {
    const fetchTags = async () => {
      const { items }: TagCollection = await client.getTags()
      setTags(
        items.map((item) => ({
          slug: item.sys.id,
          name: item.name
        }))
      )
    }
    fetchTags()
  }, [])

  const useTags = () => tags

  const getTagName = (slug: string) => {
    const tag = tags.find((tag) => tag.slug === slug)
    return tag?.name || ''
  }

  return <TagsContext.Provider value={{ useTags, getTagName }}>{children}</TagsContext.Provider>
}
