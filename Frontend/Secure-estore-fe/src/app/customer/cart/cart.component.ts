import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  products: any = [];
  http = inject(HttpClient);
  total: number = 0;
  ngOnInit(): void {
    this.http.get('http://127.0.0.1:5000/cart',{withCredentials: true}).subscribe((res: any) => {
      console.log(res);
      this.products = res.cart;
      this.total = res.subtotal;
    });
  }

  addItem(id:number){
    const payload = {
      "product_id": id
    }
    this.http.post('http://127.0.0.1:5000/cart',payload,{withCredentials: true}).subscribe((res: any) => {
      console.log(res);
      this.ngOnInit();
    });
  }

  deleteItem(product:any){
    console.log(product.product_id)
    const payload = {
      "product_id": product.product_id
    }
    const options = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
      body: payload,
    };
    this.http.delete(`http://127.0.0.1:5000/cart`,options).subscribe((res: any) => {
      console.log(res);
     this.ngOnInit();
    });
  }
}
