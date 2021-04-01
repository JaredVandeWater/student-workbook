
import { generateId } from "../Utils/GenerateId.js"
export default class Product {
    constructor(name, price, info, imgUrl = 'https://placebear.com/200/300') {
        this.name = name
        this.price = price
        this.imgUrl = imgUrl
        this.info = info
        this.id = generateId()

    }

    get Template() {

        return /*html*/`

        <div class="col-md-4 mb-3">
                    <div class="card shadow">
                        <img class="card-img-top" src="${this.imgUrl}" alt="">
                        <div class="card-body">
                            <h4 class="card-title">${this.name}
                            </h4>
                            <p class="card-text">${this.info} - $${this.price.toFixed(2)}</p>
                        </div>
                        <div class="px-3 pb-3 d-flex justify-content-between">
                            <button type="button" class="btn btn-danger"
                                onclick="app.housesController.addCart('${this.id}')">Delete</button>
                        </div>
                    </div>
                </div>`
    }
}
