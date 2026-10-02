export type Source = {
  publisher: string
  title: string
  url: string
}

export type Faq = {
  id: string
  title: string
  description: string
  sources: Source[]
  featured?: boolean
}
