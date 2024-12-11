import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { last } from 'rxjs';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  regObj: any = {
    "firstname": "",
    "lastname": "",
    "email": "",
    "password": "",
  }

  http = inject(HttpClient);
  router = inject(Router);

  onRegister() {
    this.http.post('http://127.0.0.1:5000/register', this.regObj).subscribe({
      next: (res: any) => {
        console.log(res);
        alert("User registered successfully");
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        alert(error.error.error)

      }
    });
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
