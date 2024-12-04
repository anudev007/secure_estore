import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  products: any = [];
  http = inject(HttpClient);
  route = inject(Router);
  ngOnInit(): void {
    this.http.get('http://127.0.0.1:5000/admin/products'  ,{withCredentials: true}).subscribe((res: any) => {
      this.products = res;
    });
  }
  
  editProduct(product: any){
    console.log(product.id)
    this.route.navigate(['/add-products',product.id])

  }

  deleteProduct(product: any){
    console.log(product.id)

    const options = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    this.http.delete(`http://127.0.0.1:5000/products/${product.id}`,options).subscribe((res: any) => {
      console.log(res);
     this.ngOnInit();
    });
  }

  addProduct(){
    this.route.navigate(['/add-products'])
  }



  }

