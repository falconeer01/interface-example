export interface Products{
    id:number,
    name:string,
    price:number,
    categoryId:number
}

export interface Categories{
    id:number,
    name:string    
}

export interface ProductRates{
    id:number,
    productId:number,
    rate:number
}