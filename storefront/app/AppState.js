import Product from "./Models/Product.js"
import CartItems from "./Models/CartItem.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import CartItem from "./Models/CartItem.js"

class AppState extends EventEmitter {

  total = 0

  /** @type {Product[]} */
  products = [
    new Product('Longsword', 30, 'this is a long sword'),
    new Product('shortsword', 20, 'this is a short sword'),
    new Product('Longsword2', 10, 'this is a long sword'),
  ]

  /** @type {CartItems[]} */
  cartItems = [
  ]


}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
