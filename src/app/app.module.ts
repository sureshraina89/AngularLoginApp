import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { AppRoutingModule }        from './app-routing.module';

import { AuthGuard } from './Guards/auth.guard';
import { AuthenticationService } from './Services/authentication.service';
import { UserService } from './Services/user.service';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        SignupComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }