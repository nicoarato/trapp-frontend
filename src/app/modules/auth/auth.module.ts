import { AuthHttpInterceptor } from './interceptors/auth-http.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { IonicModule } from '@ionic/angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule
    ],
    providers: [ {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthHttpInterceptor,
        multi: true
    },]
})
export class AuthModule {}
