import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    loggedUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    }

    ngOnInit() {

    }

    
}