import { SearchOptionRange, SearchOptionTerm } from '../enum/searchOptions'

export interface Category {
  id: string
  name: string
  imageUrl?: string
  defaut?: boolean
  subCategories?: Category[]
}

export interface CategoryFormResult {
  range?: SearchOptionRange
  term?: SearchOptionTerm
  firstCategoryId?: string
  secondCategoryId?: string
  thirdCategoryId?: string
}
