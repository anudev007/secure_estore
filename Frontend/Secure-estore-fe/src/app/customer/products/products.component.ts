import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  products: any = [];
  http = inject(HttpClient);
  ngOnInit(): void {
    this.http.get('http://127.0.0.1:5000/products',{withCredentials: true}).subscribe((res: any) => {
      console.log(res);
      this.products = res.products;
    });
  }

  addToCart(product: any) {
    console.log(product);
    const payload = {
      "product_id": product.id
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers: headers,
      withCredentials: true
    };
    this.http.post('http://127.0.0.1:5000/cart',payload ,options).subscribe((res: any) => {
      console.log(res);
      alert('Product added to cart');
    });
  }
}
