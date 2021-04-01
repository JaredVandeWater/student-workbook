import { ProxyState } from "../AppState.js";
import CartItem from "../Models/CartItem.js";
import Product from "../Models/Product.js";

class CartItemsService {
    addCartItem(name, price, itemId) {
        ProxyState.cartItems = [...ProxyState.cartItems, new CartItem(name, price, itemId)]
    }
    deleteCartItem(itemId) {
        ProxyState.cartItems = ProxyState.cartItems.filter(p => p.id != itemId)
    }

}



export const cartItemsService = new CartItemsService();

