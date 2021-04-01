import ProductsController from "./Controllers/ProductsController.js";

class App {
  productController = new ProductsController();
}

window["app"] = new App();
