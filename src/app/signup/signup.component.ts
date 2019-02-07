import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../Services/user.service';
 
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';

 
@Component({
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {
    model: any = {};
    loading = false;
	SignUpForm:FormGroup;
    constructor(
        private router: Router,
        private userService: UserService) {

        }

    ngOnInit() {
      	this.SignUpForm = new FormGroup({
	      username: new FormControl('', [Validators.required]),
	      password: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]*$/), Validators.minLength(8)]),
	      email: new FormControl('', [Validators.required, Validators.email]),
	      name: new FormControl('', [Validators.required]),
	      address: new FormControl('', [Validators.maxLength(30)]),
	      mobile: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(10), Validators.maxLength(10)])
	    });
    } 

    Checkvalid(data){
    	return this.SignUpForm.get([data]).touched && (this.SignUpForm.get([data]).hasError('required') || this.SignUpForm.get([data]).hasError('pattern')
    	|| this.SignUpForm.get([data]).hasError('minlength') || this.SignUpForm.get([data]).hasError('maxlength') )
    }

    onSubmit(form: FormGroup) {
	    console.log('Valid?', form.valid); 
	    if (form.valid) {
	    	this.loading = true;
	    	alert(this.userService.createUser(form.value));
	    	this.router.navigate(['/login']);
	        this.loading = false;	
	    }
	}

    
}
