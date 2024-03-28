import type { Tag } from 'contentful'

export const getTagName = (slug: string, tags: Tag[]) => {
  const tag = tags.find((tag) => tag.sys.id === slug)
  return tag?.name || ''
}
