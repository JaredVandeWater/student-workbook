import { ProxyState } from "../AppState.js";
import { cartItemsService } from "../Services/CartItemsService.js";


//Private
function _draw() {
    let cartItems = ProxyState.cartItems;
    let template = ''

    cartItems.forEach(p => { template += p.Template });
    document.getElementById("cartItemsHTML").innerHTML = template
    document.getElementById('total').innerText = `${ProxyState.total}`
}

//Public
export default class CartItemsController {
    constructor() {
        ProxyState.on("cartItems", _draw);
        ProxyState.on("total", _draw);
        _draw()
    }

    addCartItem(name, price, itemId) {
        cartItemsService.addCartItem(name, price, itemId)
        console.log(itemId);
    }
    deleteCartItem(price, itemId) {
        cartItemsService.deleteCartItem(price, itemId)
    }
}
