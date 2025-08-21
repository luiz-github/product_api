import { validate } from 'class-validator'
import { plainToInstance } from 'class-transformer'
import { Request, Response, NextFunction } from 'express'

export function validateRequest<T extends object>(dtoClass: new () => T) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const data = { ...req.body, ...req.params, ...req.query }
        const instance = plainToInstance(dtoClass, data)

        const errors = await validate(instance)

        if (errors.length > 0) {
            const formattedErrors = errors.map(error => ({
                field: error.property,
                message: Object.values(error.constraints || {})[0],
            }))

            return res.status(400).json({ errors: formattedErrors })
        }

        next()
    }
}
