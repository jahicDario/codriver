import { Injectable }    from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Malfunction } from './malfunction';


@Injectable()
export class MalfunctionService{

    constructor(private http: HttpClient){}

     CONFIG_URL: string = "http://suvozac.herokuapp.com/";
     CLIENT_ID: string = "afOCVN8RvtPB3EwNjhCchj2m43JcVTKxnd0UJSTG";
    
    // CONFIG_URL: string = "http://localhost:8888/";
   // CLIENT_ID: string = "17uYJAK2C0UgjqbH3BDbXk1k2hF3BseFHFVyn1fc";

    getMalfunctions(): Observable<Malfunction[]> {
        return this.http.get<Malfunction[]>(this.CONFIG_URL + "read-applications-malfunction/");
    }
}