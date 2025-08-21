import {Router} from 'express'
import ProductController from "../controllers/product.controller";

const router = Router()
const productController = new ProductController()

router.post('/product', productController.createProduct)
router.get("/product/:id", productController.getProduct)
router.get('/product', productController.getProducts)
router.put('/product/:id', productController.updateProduct)
router.delete('/product/:id', productController.deleteProduct)

export default router