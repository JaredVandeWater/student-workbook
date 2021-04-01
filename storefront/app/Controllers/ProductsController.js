import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ProductsService.js";


//Private
function _draw() {
    let products = ProxyState.products;
    let template = ''

    products.forEach(p => { template += p.Template });
    document.getElementById("productHTML").innerHTML
}

//Public
export default class ValuesController {
    constructor() {
        ProxyState.on("products", _draw);
        _draw()
    }

    // TODO add functions here

}
