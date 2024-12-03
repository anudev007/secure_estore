import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  products: any = [];
  http = inject(HttpClient);
  ngOnInit(): void {
    this.http.get('http://127.0.0.1:5000/products').subscribe((res: any) => {
      console.log(res);
      this.products = res.products;
    });
  }

}