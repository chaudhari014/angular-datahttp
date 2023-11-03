import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  productData: Product[] = [];
  constructor(private product: ProductService) {}
  ngOnInit() {
    this.product.getProducts().subscribe((data: Product[]) => {
      this.productData = data;
      console.log(this.productData);
    });
  }
}
