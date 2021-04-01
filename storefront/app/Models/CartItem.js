import { generateId } from "../Utils/GenerateId.js"

export default class CartItem {
    constructor(name, price, id = generateId()) {
        this.id = id
        this.price = price
        this.name = name

    }

    get Template() {
        return `<li>${this.name} - $${this.price.toFixed(2)} <i class="fas fa-times ml-2 text-danger" onclick="app.cartItemsController.deleteCartItem('${this.id}')"></i></li>`
    }
}