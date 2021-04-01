
import { generateId } from "../Utils/GenerateId.js"
export default class Product {
    constructor(name, price, info, imgUrl = 'https://placebear.com/300/200') {
        this.name = name
        this.price = price
        this.imgUrl = imgUrl
        this.info = info
        this.id = generateId()
        this.arr = []
    }

    get Template() {

        return /*html*/`

        <div class="col-md-4 py-3">
                    <div class="card shadow">
                        <img class="card-img-top" src="${this.imgUrl}" alt="image">
                        <div class="card-body">
                            <h4 class="card-title">${this.name}
                            </h4>
                            <p class="card-text">${this.info} - $${this.price.toFixed(2)}</p>
                        </div>
                        <div class="px-3 pb-3 d-flex justify-content-between">
                            <button type="button" class="btn btn-danger"
                                onclick="app.cartItemsController.addCartItem('${this.name}',${this.price},'${this.id}')">Add to Cart</button>
                        </div >
                    </div >
                </div > `

    }
}
