import { generateId } from "../Utils/GenerateId.js"

export default class CartItem {
    constructor(name, finalProductId, id = generateId()) {
        this.id = id
        this.name = name
        this.finalProductId = finalProductId
    }

    get Template() {
        return `<li>${this.name} <i class="fas fa-times ml-2 text-danger" onclick="app.ingredientsController.deleteCart('${this.id}')"></i></li>`
    }
}