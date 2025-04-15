import ICartItem from './cart-item'

interface IOrder {
  customer: string
  phone: string
  address: string
  priority: boolean
  cart: ICartItem[]
}

export default IOrder
