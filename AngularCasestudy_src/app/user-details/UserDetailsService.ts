import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable } from "rxjs";
import { UserDetailsInterface } from "./UserDetailsInterface";

@Injectable({
    providedIn : 'root'
})

export class UserDetailsService{
    private url : string = "http://localhost:8080/users";
    
    constructor(private http : HttpClient){}

    getUsers() : Observable<UserDetailsInterface[]>{
        return this.http.get<UserDetailsInterface[]>(this.url);
    }
}