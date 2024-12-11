import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  regObj: any = {
    "name": "",
    "price": "",
    "description": "",
  }
  isEdit : boolean = false;
  productId : any;

  http = inject(HttpClient);
  router = inject(Router);
  route = inject(ActivatedRoute)

  ngOnInit(){
    this.productId = this.route.snapshot.paramMap.get('id');
    if(this.productId){
      this.isEdit = true;
      this.http.get(`http://127.0.0.1:5000/admin/products/${this.productId}`,{withCredentials: true}).subscribe((res: any) => {
        this.regObj = res;
      });
    }
    
  }

  onEdit(){
    this.http.put(`http://127.0.0.1:5000/admin/products/${this.productId}`, this.regObj,{withCredentials: true}).subscribe({
      next: (res: any) => {
      alert(res.message);
    },
  error: (error: any)=>{
    alert(error.error.error)
  }});
  }

  onAdd() {
    this.http.post('http://127.0.0.1:5000/admin/products', this.regObj,{withCredentials: true}).subscribe({
      next: (res: any) => {
      alert(res.message);
  
    },
    error: (error: any)=>{
      alert(error.error.error)
    }});
  }

}
