export interface ProductViewDto{
    id:number;
    categoryId:number;
    productId:number;
    productName:string;
    productPrice:number;
    productRate?:number;
    rateAvg:number;
}