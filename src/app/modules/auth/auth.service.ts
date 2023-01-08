import { Injectable } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';
import { from, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpStatusCode } from '@angular/common/http';

export interface ApiResponse<T = any> {
    result: T;
    statusCode: HttpStatusCode;
}
export interface User {
    id: number;
    username: string;
    nombre: string;
    rol: { id: number; description: string };
}
export interface LoginResponse {
    user: User;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    access_token: string;
}
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    api: string = environment.api;
    constructor(private storage: StorageService, private http: HttpClient) {}

    login(
        username: string,
        password: string
    ): Observable<ApiResponse<LoginResponse>> {
        return this.http
            .post<ApiResponse<LoginResponse>>(`${this.api}/auth/login`, {
                username,
                password
            })
            .pipe(
                tap((value) => {
                    if (value.statusCode === HttpStatusCode.Ok) {
                        this.setUserinfo(value.result);
                    }
                })
            );
    }

    setUserinfo(userinfo: LoginResponse) {
        this.storage.set('auth.token', userinfo.access_token);
        this.storage.set('auth.user', userinfo.user);
    }

    isAdmin() {
        return from(this.storage.get('auth.user')).pipe(
            map((user: User) => user.rol.id === 1)
        );
    }

    isLogged() {
        return from(this.storage.get('auth.token')).pipe(
            map((value) => !!value)
        );
    }

    getUser(): Observable<User> {
        return from(this.storage.get('auth.user'));
    }
    getToken() {
        return from(this.storage.get('auth.token'));
    }

    logout() {
        this.storage.clear();
    }
}
