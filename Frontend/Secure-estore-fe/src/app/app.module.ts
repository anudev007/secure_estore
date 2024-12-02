import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
    
        
    ],
    imports: [
        BrowserModule,
        AppComponent,
        NavbarComponent,
        AuthModule,
        AdminModule,
        CustomerModule,
        SharedModule,
    ],
    providers: [],
  
})
export class AppModule { }