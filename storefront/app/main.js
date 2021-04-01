import ProductsController from "./Controllers/ProductsController.js";
import CartItemsController from "./Controllers/CartItemsController.js";

class App {
  productController = new ProductsController();
  cartItemsController = new CartItemsController();
}

window["app"] = new App();
