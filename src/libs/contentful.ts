import type { Document } from '@contentful/rich-text-types'
import type { Entry } from 'contentful'
import { createClient } from 'contentful'

export interface IChildTagFields {
  fields: {
    name: string
    slug: string
  }
}

export interface ITagFields {
  name: string
  slug: string
}

export interface IPostFields {
  title: string
  slug: string
  content: Document
  tags: IChildTagFields[]
  contentMarkdown: string
  description: string
  keywords: string
}

export interface IPost extends Entry<IPostFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'article'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export const buildClient = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CTF_SPACE_ID || '',
    accessToken: process.env.NEXT_PUBLIC_CTF_CDA_ACCESS_TOKEN || ''
  })
  return client
}
