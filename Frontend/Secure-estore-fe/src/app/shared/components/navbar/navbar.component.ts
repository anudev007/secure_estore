import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  userName = localStorage.getItem('userName');
  userType = localStorage.getItem('userType');

  logout() {
    localStorage.clear();
    window.location.reload();
  }
  
}
