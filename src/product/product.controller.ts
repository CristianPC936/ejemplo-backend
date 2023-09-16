import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor (private readonly productService: ProductService){}

    @Get()
    getProducts(){
        return this.productService.findAll();
    }

    @Get(':id')
    getProductById(@Param('id', ParseIntPipe) id: number){

        console.log(`El id a buscar es ${id}`)

        return this.productService.findById(id);

    }

    @Put(':id')
    updateProduct(@Param('id', ParseIntPipe) id: number, @Body() body){

        console.log(`El id a actualizar es ${id}`);
        console.log(body);

        return this.productService.updateProduct(body, id);
    }

    @Delete(':id')
    deleteById(@Param('id', ParseIntPipe) id: number){

        console.log(`El id a eliminar es ${id}`)

        return this.productService.deleteProduct(id);
    }

    @Post()
    createProduct(@Body() body){

        console.log(body);

        return this.productService.createProduct(body);
    }


}
