import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
 const router = inject(Router);
    if (localStorage.getItem('isAuthenticated') !== 'true') {
        router.navigate(['/login']);
        return false;
    }

  const userType = localStorage.getItem('userType');
  const routePath = route.routeConfig?.path;


  if (routePath === 'dashboard' && userType !== 'admin') {
    router.navigate(['/products']); 
    return false;
  }


  if (routePath === 'products' && userType !== 'consumer') {
    router.navigate(['/dashboard']); 
    return false;
  }

  return true; 
};
