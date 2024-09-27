export interface Product {
    id: number
    categoryId: number
    brandId: number
    code: string
    name: string
    description: string
    price: number
    stock: number
    state: boolean
    remove? : boolean
  }
  export interface productBody {
    code: string
    name: string
    description: string
    price: number
    stock: number
    state: boolean
 }