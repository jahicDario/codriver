import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface AuthResponse {
    access_token: string;
}


@Injectable()
export class CreatemalfunctionService {

    //    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    CONFIG_URL: string = "http://suvozac.herokuapp.com/";
    CLIENT_ID: string = "afOCVN8RvtPB3EwNjhCchj2m43JcVTKxnd0UJSTG";
    constructor(private http: HttpClient) {
    }


    fetchVehicles(): Observable<any>{
        return this.http.get(this.CONFIG_URL + "read-driver-vehicles/");
    }


    createMalfunction(vehicle: number, mf_type: number, region: number, mf_desc: string) {
        console.log("vehicle=" + vehicle + "&mf_type=" + mf_type + "&region=" + region + "&mf_desc=" + mf_desc);
        return this.http
            .post(this.CONFIG_URL + "create-malfunction/",
            "vehicle=" + vehicle + "&mf_type=" + mf_type + "&region=" + region + "&mf_desc=" + mf_desc,
            { headers: new HttpHeaders('Content-Type: application/x-www-form-urlencoded') }
            ).subscribe();
    }
}