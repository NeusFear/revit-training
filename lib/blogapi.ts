import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

export type LabelType = {
  type: string,
  title: string
}

export type PostType = {
  title: string,
  slug: string,
  coverImage: string,
  date: string,
  files: string[],
  video: string,
  excerpt: string,
  content: string,
  prev: any,
  next: any,
  label: LabelType
}

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  if (slug == null) return null;
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Record<string, string> = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date
    .sort((post1, post2) => ((post1 == null || post2 == null ) ? 0 : post1.date > post2.date ? 1 : -1))
  return posts
}
