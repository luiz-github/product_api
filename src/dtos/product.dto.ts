import {Transform} from 'class-transformer'
import {IsInt, IsNotEmpty, IsNumber, IsString} from 'class-validator'

export class ProductDTO {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;
}

export class ProductByIdDTO {
    @IsNotEmpty()
    @Transform(({ value }) => Number(value), { toClassOnly: true })
    @IsString()
    id: string
}