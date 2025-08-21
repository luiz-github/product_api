import {Router} from 'express'
import ProductController from "../controllers/product.controller";
import {validateRequest} from "../middlewares/validator.midleware";
import {ProductByIdDTO, ProductDTO} from "../dtos/product.dto";

const router = Router()
const productController = new ProductController()

router.post('/product', validateRequest(ProductDTO), productController.createProduct)
router.get("/product/:id", validateRequest(ProductByIdDTO), productController.getProduct)
router.get('/product', productController.getProducts)
router.put('/product/:id', validateRequest(ProductByIdDTO), productController.updateProduct)
router.delete('/product/:id', validateRequest(ProductByIdDTO), productController.deleteProduct)

export default router