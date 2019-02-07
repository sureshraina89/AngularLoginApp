import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(data) {
        let users = [];
        if (localStorage.getItem('UserList')) {
            users = JSON.parse(localStorage.getItem('UserList'));
        }   
        const userData = users.length > 0 && users.filter(a => (a.username === data.username || a.email === data.username 
                                                                || a.mobile === data.username) && a.password === data.password);
        const isValidUser = userData && userData[0] ? true : false;
        if (isValidUser) {
            localStorage.setItem('loggedUser', JSON.stringify(userData[0]));
        }
        
        return isValidUser;       
    }

    logout() {
        localStorage.removeItem('loggedUser');
    }
}

