import { ProxyState } from "../AppState.js";
import { cartItemsService } from "../Services/CartItemsService.js";


//Private
function _draw() {
    let cartItems = ProxyState.cartItems;
    let template = ''

    cartItems.forEach(p => { template += p.Template });
    document.getElementById("productHTML").innerHTML = template
}

//Public
export default class ValuesController {
    constructor() {
        ProxyState.on("products", _draw);
        _draw()
    }

    // TODO add functions here

}
