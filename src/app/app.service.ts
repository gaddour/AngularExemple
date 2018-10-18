import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
    providedIn: 'root',
})
export class AppService  {

    API_URL: string = environment.apiUrl + '/users';
    httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json'
    });
    options = { headers: this.httpHeaders };

    constructor(private http: HttpClient) {
    }

    getAllUsers(): Observable<Array<User>> {
        return this.http.get<Array<User>>(this.API_URL);
    }

    getUserById(userId: number): Observable<User> {
        return this.http.get<User>(this.API_URL + '/' + userId);
    }

    addUser(user: User): Observable<User> {
        return this.http.post<User>(this.API_URL, user, this.options);
    }

    editUser(user: User): Observable<User> {
        return this.http.put<User>(this.API_URL + '/' + user.id, user, this.options);
    }

    deleteUser(userID: number): Observable<User> {
        return this.http.delete<User>(this.API_URL + '/' + userID);
    }
}



