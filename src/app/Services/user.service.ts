import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../Model/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }
 
    getUserById(id: number) {
        // Here return logged user data
        return "";
    }

    createUser(user: User) {
        let users = [];
        if (localStorage.getItem('UserList')) {
            users = JSON.parse(localStorage.getItem('UserList'));
        }
        users.push(user);
        localStorage.setItem('UserList', JSON.stringify(users));
        return "User Saved Successfully";
    }

}