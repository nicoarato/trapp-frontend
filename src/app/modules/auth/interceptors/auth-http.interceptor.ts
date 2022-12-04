/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpHeaders,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, from, throwError, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
// import { _throw } from 'rxjs/observable/throw';
import {
    catchError,
    mergeMap,
    switchMap,
    filter,
    take,
    map
} from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthHttpInterceptor implements AuthHttpInterceptor {
    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
        null
    );
    constructor(
        private alertCtrl: AlertController,
        private authService: AuthService
    ) { }


    /**
     * Adds the token to your headers if it exists
     * @param request - Request to add token
     * @param token - Token to add
     */
    private static addToken(request: HttpRequest<any>, token: any) {
        if (token) {
            let clone: HttpRequest<any>;
            let headers: any = {
                Authorization: `Bearer ${token}`
            };
            if (!(request.body instanceof FormData)) {
                headers = {
                    Authorization: `Bearer ${token}`,
                    Accept: `application/json`,
                    'Content-Type': `application/json`
                };
            }
            clone = request.clone({
                setHeaders: headers
            });
            return clone;
        }

        return request;
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // sending the request only for the refresh token endpoint
        if (req.url.includes('oauth')) {
            return next.handle(req);
        }

        return this.authService.getToken().pipe(
            mergeMap((token) => {
                const clonedReq = AuthHttpInterceptor.addToken(req, token);
                return next.handle(clonedReq).pipe(
                    catchError((error) => {
                        if (
                            error instanceof HttpErrorResponse &&
                            error.status === 401
                        ) {
                            return this.handleAccessError(req, next);
                        } else {
                            return throwError(error.message);
                        }
                    })
                ) as any;
            })
        ) as any;
    }

    private handleAccessError(request: HttpRequest<any>, next: HttpHandler) {
        // if (!this.isRefreshing) {
        //     this.isRefreshing = true;
        //     this.refreshTokenSubject.next(null);
        //     return this.authService.getAccessTokenUsingRefreshToken().pipe(
        //         switchMap((token: any) => {
        //             this.isRefreshing = false;
        //             this.refreshTokenSubject.next(token);
        //             return next.handle(
        //                 AuthHttpInterceptor.addToken(request, token)
        //             );
        //         })
        //     );
        // } else {
        return this.refreshTokenSubject.pipe(
            filter((token) => token != null),
            take(1),
            switchMap((jwt) =>
                next.handle(AuthHttpInterceptor.addToken(request, jwt))
            )
        );
        // }
    }
}
