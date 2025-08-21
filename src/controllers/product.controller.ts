import { OutgoingMessage } from 'http'
import {Request, Response} from "../helpers/generic.helper"
import {ProductByIdDTO, ProductDTO} from "../dtos/product.dto"
import {ProductService} from "../services/product.service"
import {APIResponse} from "../helpers/apiResponse.helper"

export default class ProductController {
    private ProductService: ProductService

    constructor() { this.ProductService = new ProductService(); }

    createProduct = async (req: Request<ProductDTO>, res: Response): Promise<OutgoingMessage> => {
        try {
            const serviceResponse:APIResponse = await this.ProductService.createProduct(req)
            return res.status(serviceResponse.stat_code).json(serviceResponse)
        } catch (e) {
            return res.status(e.stat_code).json(e)
        }
    }

    getProducts = async (req: Request, res: Response): Promise<OutgoingMessage> => {
        try {
            const serviceResponse:APIResponse = await this.ProductService.getProducts(req)
            return res.status(serviceResponse.stat_code).json(serviceResponse)
        } catch (e) {
            return res.status(e.stat_code).json(e)
        }
    }

    getProduct = async (req: Request<ProductByIdDTO>, res: Response): Promise<OutgoingMessage> => {
        try {
            const serviceResponse:APIResponse = await this.ProductService.getProduct(req)
            return res.status(serviceResponse.stat_code).json(serviceResponse)
        } catch (e) {
            return res.status(e.stat_code).json(e)
        }
    }

    updateProduct = async (req: Request<ProductDTO>, res: Response): Promise<OutgoingMessage>=> {
        try {
            const serviceResponse:APIResponse = await this.ProductService.updateProduct(req)
            return res.status(serviceResponse.stat_code).json(serviceResponse)
        } catch (e) {
            return res.status(e.stat_code).json(e)
        }
    }

    deleteProduct = async (req: Request<ProductByIdDTO>, res: Response): Promise<OutgoingMessage> => {
        try {
            const serviceResponse:APIResponse = await this.ProductService.deleteProduct(req)
            return res.status(serviceResponse.stat_code).json(serviceResponse)
        } catch (e) {
            return res.status(e.stat_code).json(e)
        }
    }

}