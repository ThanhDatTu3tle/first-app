import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        if (this.loginService.isLoggedIn()) {
            if (route.url.length > 0) {
                let menu = route.url[0].path;
                if (menu == 'user') {
                    if (this.loginService.getRole() != "-1") {
                        return true;
                    } else {
                        this.router.navigate(['access']);
                        return false;
                    }
                } else {
                    return true;
                }
            } else {
                return true;
            }
        }
        else {
            this.router.navigate(['auth/login']);
            return false;
        }
    }

}
