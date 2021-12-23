import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
//import { User } from "./User";
@Injectable({
    providedIn: 'root'
})
export class UserServices {


    private baseUrl  = 'http://localhost:8080/User';
    
    constructor(private httpClient: HttpClient) { }

    validate(Username:string, Password:string):Observable<any> {
        return this.httpClient
            .get<boolean>(`${this.baseUrl}/${Username}/${Password}`);
    }


}