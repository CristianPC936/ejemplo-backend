import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {

    private products = [
        {
            id: 1,
            nombre: 'producto1',
            tipo: 'tipo1'
        },
        {

            id: 2,
            nombre: 'producto2',
            tipo: 'tipo2'
        }
]


findAll(){
    return this.products;
}

findById(id: number){

    const product = this.products.find(c => c.id === id);

    if(!product){
        throw new NotFoundException(`Product with id ${id} does not exist`);
    }
    return product;
}

updateProduct(productBody, id){

    const product = this.products.find(c => c.id === id);

    if(!product){
        throw new NotFoundException(`Product with id ${id} does not exist`);
    }

    return{status: 'Producto Actualizado'}
}

deleteProduct(id){

    const product = this.products.find(c => c.id === id);

    if(!product){
        throw new NotFoundException(`Products with id ${id} does not exist`);
    }

    return{status: 'Producto Eliminado'}
}

createProduct(productBody){

    const product = this.products.find(c => c.id === productBody.id);

    if(product){
        throw new NotFoundException(`Product with id ${productBody.id} exists`);
    }

    return{status: 'Producto Creado'}
}


}
