import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from "./product.service";
import { IProduct } from './product';
@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string='Product Detail';
  product:IProduct;
  
  constructor(private route:ActivatedRoute,
              private router:Router,private productService: ProductService) { }

  ngOnInit() {
    /* let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` : ${id}`;
    this.product={
      "productId": id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }; */
    const param = this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` : ${param}`;
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }
  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.product = product);
  }

  onBack():void{
    this.router.navigate(['/products']);
  }

}
