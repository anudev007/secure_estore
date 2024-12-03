import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { RegisterComponent } from './auth/register/register.component';
import { ProductsComponent } from './customer/products/products.component';
import { ListComponent } from './admin/list/list.component';
import { CartComponent } from './customer/cart/cart.component';
 export const routes: Routes = [
   {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
   },
   {
    path: 'login',
    component: LoginComponent
   },
   {
    path: 'register',
    component: RegisterComponent
   },
   {path : '',
    component : LayoutComponent,
    children : [
        {
            path: 'dashboard',
            component: DashboardComponent,
            canActivate: [authGuard]
        },
        {
            path: 'products',
            component: ProductsComponent,
            canActivate: [authGuard]
        },
        {
            path: 'list',
            component: ListComponent,
            canActivate: [authGuard]
        },
        {
            path: 'cart',
            component: CartComponent,
            canActivate: [authGuard]
        },
    ]
   }
  ];
