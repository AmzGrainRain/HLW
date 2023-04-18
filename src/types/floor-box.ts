import { Link, ImageTextLink } from './common'

interface Product {
  image: string
  title: string
  tag: string
  price: string
  selled: string
  url: string
}

interface Data {
  title: Link
  description: string
  more: Link
  banner: ImageTextLink
  list: Product[]
}

export type {
  Product,
  Data
}
