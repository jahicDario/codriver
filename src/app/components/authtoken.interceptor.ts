
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var token;
        if ((token = localStorage.getItem("access_token")) != null) {
            req = req.clone({
                setHeaders: {
                    'Authorization' : "Bearer " + token
                }
            });
        }

        console.log(req)
        return next.handle(req);
    }

}