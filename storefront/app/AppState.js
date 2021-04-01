import Product from "./Models/Product.js"
import CartItems from "./Models/CartItem.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {Product[]} */
  products = [
    new Product('Longsword', 30, 'this is a long sword'),
    new Product('shortsword', 30, 'this is a short sword'),
    new Product('Longsword', 30, 'this is a long sword'),
    new Product('shortsword', 30, 'this is a short sword')
  ]

  /** @type {CartItems[]} */
  cartItems = []
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
