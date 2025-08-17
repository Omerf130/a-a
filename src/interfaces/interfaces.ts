export interface INavLink {
  href: string;
  label: string;
  isDropdownExist: boolean;
}

export interface ISlideData {
  description: string
  headline:string
  image: string
  category: string
  id: number
}

export interface ISuccess {
  id: number
  title: string
  subtitle: string
  pageUrl: string
}