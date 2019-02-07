import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';

import { AuthenticationService } from '../Services/authentication.service';

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
 	LoginForm:FormGroup;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.authenticationService.logout();
      	this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      	this.LoginForm = new FormGroup({
	      username: new FormControl('', [Validators.required]),
	      password: new FormControl('', [Validators.required]) 
	    });
    }

    onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); 
    if (form.valid) {
    	this.loading = true;
        if (this.authenticationService.login(form.value)) {
        	this.router.navigate(['/home']);
        }
        this.loading = false;	
    }
  }
}
