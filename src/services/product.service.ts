import {Repository, UpdateResult} from "typeorm"
import {Product} from "../entities/Product"
import {AppDataSource} from "../data-source"
import {ProductByIdDTO, ProductDTO} from "../dtos/product.dto"
import {APIResponse, apiResponse} from "../helpers/apiResponse.helper"
import {StatusCodes} from "http-status-codes"
import {Request} from "../helpers/generic.helper"
import {getPagination} from "../helpers/pagination.helper";

export class ProductService {
    private ProductRepository: Repository<Product>

    constructor() {
        this.ProductRepository = AppDataSource.getRepository(Product)
    }

    async createProduct(req: Request<ProductDTO>): Promise<APIResponse> {
        try {
            const product:Product = this.ProductRepository.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price
            })
            const newProduct = await this.ProductRepository.save(product)
            return Promise.resolve(apiResponse(StatusCodes.OK, 'Product created successfully.', newProduct))
        } catch (e: any) {
            return Promise.reject(apiResponse(StatusCodes.INTERNAL_SERVER_ERROR, "Internal server error", e))
        }
    }

    async getProducts(req: Request): Promise<APIResponse> {
        try {
            const {take, page, order } = getPagination(req.query)
            const products:Product[] = await this.ProductRepository.find({
                order: {
                    id: order,
                },
                take: take,
                skip: page
            })
            if (!products.length) return Promise.resolve(apiResponse(StatusCodes.NOT_FOUND, 'Product not found'))
            return Promise.resolve(apiResponse(StatusCodes.OK, 'Products found', products))
        } catch (e: any) {
            return Promise.reject(apiResponse(StatusCodes.INTERNAL_SERVER_ERROR, "Internal server error", e))
        }
    }

    async getProduct(req: Request<ProductByIdDTO>): Promise<APIResponse> {
        try {
            const product:Product = await this.ProductRepository.findOne({
                where: {id: req.params.id}
            })
            if (!product) return Promise.resolve(apiResponse(StatusCodes.NOT_FOUND, 'Product not found'))
            return Promise.resolve(apiResponse(StatusCodes.OK, 'Products found', product))
        } catch (e: any) {
            return Promise.reject(apiResponse(StatusCodes.INTERNAL_SERVER_ERROR, "Internal server error", e))
        }
    }

    async updateProduct(req: Request<ProductDTO>): Promise<APIResponse> {
        try {
            const product:Product = await this.ProductRepository.findOne({
                where: {id: req.params.id}
            })
            if (!product) return Promise.resolve(apiResponse(StatusCodes.NOT_FOUND, 'Product not found'))
            await this.ProductRepository.update(req.params.id, {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price
            })
            return Promise.resolve(apiResponse(StatusCodes.OK, 'Product updated successfully.'))
        } catch (e: any) {
            return Promise.reject(apiResponse(StatusCodes.INTERNAL_SERVER_ERROR, "Internal server error", e))
        }
    }

    async deleteProduct(req: Request<ProductByIdDTO>): Promise<APIResponse> {
        try {
            const product:Product = await this.ProductRepository.findOne({
                where: {id: req.params.id}
            })
            if (!product) return Promise.resolve(apiResponse(StatusCodes.NOT_FOUND, 'Product not found'))
            await this.ProductRepository.delete(product.id)
            return Promise.resolve(apiResponse(StatusCodes.OK, 'Product deleted successfully.'))
        } catch (e: any) {
            return Promise.reject(apiResponse(StatusCodes.INTERNAL_SERVER_ERROR, "Internal server error", e))
        }
    }
}