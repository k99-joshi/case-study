import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { IEmployee } from "./Employee";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class EmployeeService{
    private url : string = "/assets/data/Employees.json";

    constructor(private http : HttpClient){}

    getEmployees() : Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>(this.url);
    }
    
}