import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Router } from '@angular/router';


interface AuthResponse {
    access_token: string;
}


@Injectable()
export class DriverService {

    //    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    CONFIG_URL: string = "http://suvozac.herokuapp.com/";
    CLIENT_ID: string = "afOCVN8RvtPB3EwNjhCchj2m43JcVTKxnd0UJSTG";

    private static loggedIn = new BehaviorSubject<boolean>(false);
    token: string;



    constructor(private router: Router, private http: HttpClient) {
        if (localStorage.getItem('access_token')) {
            DriverService.loggedIn.next(true);
        }
    }


    get isLoggedIn() {
        return DriverService.loggedIn.asObservable();
    }

    registerDriver(username: string, email: string, password: string) {
        return this.http
            .post(this.CONFIG_URL + "signup/",
            "username=" + username + "&password=" + password + "&email=" + email,
            { headers: new HttpHeaders('Content-Type: application/x-www-form-urlencoded') }
            ).subscribe();
    }

    socialSignup() {
        // return this.http
        // .get(
        //     "https://www.facebook.com/v2.10/dialog/oauth?client_id=394576440904565&redirect_uri=http://localhost:4200&" + `
        //     response_type=token`)
        //     .subscribe();
        window.open("https://www.facebook.com/v2.10/dialog/oauth?client_id=394576440904565&" + `
        redirect_uri=http://localhost:4200/signed-up&response_type=token`,
            '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
    }


    convertToken(token: string) {
        this.http
            .post(this.CONFIG_URL + "social-auth/convert-token/",
            "grant_type=convert_token" + "&client_id=17uYJAK2C0UgjqbH3BDbXk1k2hF3BseFHFVyn1fc" + "&backend=facebook"
            + "&token=" + token,
            { headers: new HttpHeaders('Content-Type: application/x-www-form-urlencoded') }
            ).subscribe();
    }


    login(username: string, password: string) {
        var parametri = "username=" + username + "&password=" + password + "&grant_type=password" +
            "&client_id=" + this.CLIENT_ID;

        this.http.post<AuthResponse>(this.CONFIG_URL + "o/token/", parametri,
            { headers: new HttpHeaders('Content-Type: application/x-www-form-urlencoded') }).subscribe(
            data => {
                localStorage.setItem("access_token", data.access_token);
                DriverService.loggedIn.next(true);
                this.fetchProfileData().subscribe(
                    data => {
                        localStorage.setItem("user_type", data.user_type);
                        console.log("Stigli podaci o korisniku " + data.name);
                        console.log(data);
                    }
                );
                this.router.navigate(['/']);
                console.log("true je sad");
            },
            err => {
                console.log(err);
            }

            );
    }
    logout() {
        localStorage.removeItem("access_token");
        DriverService.loggedIn.next(false);
        this.router.navigate(['/login']);

    }
    fetchProfileData(): Observable<User> {
        return this.http.get<User>(this.CONFIG_URL + "me/");
    }
    //   constructor(private http: Http) { }

    //   getHeroes(): Promise<Hero[]> {
    //     return this.http.get(this.heroesUrl)
    //                .toPromise()
    //                .then(response => response.json().data as Hero[])
    //                .catch(this.handleError);
    //   }


    //   getHero(id: number): Promise<Hero> {
    //     const url = `${this.heroesUrl}/${id}`;
    //     return this.http.get(url)
    //       .toPromise()
    //       .then(response => response.json().data as Hero)
    //       .catch(this.handleError);
    //   }

    //   delete(id: number): Promise<void> {
    //     const url = `${this.heroesUrl}/${id}`;
    //     return this.http.delete(url, {headers: this.headers})
    //       .toPromise()
    //       .then(() => null)
    //       .catch(this.handleError);
    //   }

    //   create(name: string): Promise<Hero> {
    //     return this.http
    //       .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    //       .toPromise()
    //       .then(res => res.json().data as Hero)
    //       .catch(this.handleError);
    //   }

    //   update(hero: Hero): Promise<Hero> {
    //     const url = `${this.heroesUrl}/${hero.id}`;
    //     return this.http
    //       .put(url, JSON.stringify(hero), {headers: this.headers})
    //       .toPromise()
    //       .then(() => hero)
    //       .catch(this.handleError);
    //   }

    //   private handleError(error: any): Promise<any> {
    //     console.error('An error occurred', error); // for demo purposes only
    //     return Promise.reject(error.message || error);
    //  }
}