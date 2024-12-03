import { Component, inject } from '@angular/core';
import { routes } from '../../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  userName = localStorage.getItem('userName');
  userType = localStorage.getItem('userType');
  router = inject(Router);

  logout() {
    localStorage.clear();
    window.location.reload();
  }
  navigateCart(){
    this.router.navigate(['/cart']);
  }
  
}
