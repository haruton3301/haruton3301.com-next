import type { Document } from "@contentful/rich-text-types"
import type { EntrySkeletonType } from "contentful"
import { createClient } from "contentful"

export interface ITagFields {
  name: string
  slug: string
}

export interface IPostFields {
  title: string
  slug: string
  content: Document
  contentMarkdown: string
  description: string
  keywords: string
  tags: Array<string>
}

export type TypePostSkeleton = EntrySkeletonType<IPostFields, "article">

export const buildClient = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CTF_SPACE_ID || "",
    accessToken: process.env.NEXT_PUBLIC_CTF_CDA_ACCESS_TOKEN || "",
  })
  return client
}

export const client = buildClient()
