import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
   loginObj : any = {
     "email" :"",
     "password" : ""
   }

    http = inject(HttpClient);
    router = inject(Router);

    onLogin() {
        this.http.post('http://127.0.0.1:5000/login', this.loginObj).subscribe((res: any) => {
            console.log(res);
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('userType', res.user);
            localStorage.setItem('userName', res.name);
            if (res.user === 'admin') {
              this.router.navigate(['/dashboard']); 
          } else if ( res.user === 'consumer') {
              this.router.navigate(['/products']);
          }
        });
    }
    
    goToRegister() {
        this.router.navigate(['/register']);
    }

}
