import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    productTitle:String='Product List';
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;

    filteredProducts:IProduct[];

    private _listFilter: string = '';
    public get listFilter(): string {
        return this._listFilter;
    }
    public set listFilter(value: string) {
        this._listFilter = value;
        
        this.filteredProducts=this.listFilter?this.performFilter(this.listFilter):this.products;
    }

    products:IProduct[]=[];

    constructor(private _productService:ProductService){
    }
    toggleImage():void{
        this.showImage=!this.showImage;
    }
    ngOnInit():void{
        this._productService.getProducts().subscribe(
            products=>{
                this.products=products;
                this.filteredProducts=this.products;
        });
    }

    onRatingClicked(message:string):void{
        this.productTitle='Product List: '+  message;
    }

    performFilter(filterBy:string):IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=>
        product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
    }
}