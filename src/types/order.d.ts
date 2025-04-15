import ICartItem from './cart-item'

interface IOrder {
  name: string
  phone: string
  address: string
  priority: boolean
  cart: ICartItem[]
}

export default IOrder
