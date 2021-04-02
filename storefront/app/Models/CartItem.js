import { generateId } from "../Utils/GenerateId.js"

export default class CartItem {
    constructor(name, price, id, cartItemid = generateId()) {
        this.id = id
        this.price = price
        this.name = name
        this.cartItemid = cartItemid

    }

    get Template() {
        return `<li>${this.name} - $${this.price.toFixed(2)} <i class="fas fa-times ml-2 text-danger" onclick="app.cartItemsController.deleteCartItem(${this.price},'${this.cartItemid}')"></i></li>`
    }
}