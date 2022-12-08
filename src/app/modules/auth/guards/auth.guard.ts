import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad {
    constructor(private authService: AuthService, private router: Router) {}
    canLoad(
        route: Route,
        segments: UrlSegment[]
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        return this.authService.isLogged().pipe(
            tap((val) => {
                if (!val) {
                    this.router.navigate(['/auth']);
                }
            })
        );
    }
}
