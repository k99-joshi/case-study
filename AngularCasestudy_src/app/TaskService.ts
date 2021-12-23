import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { ITask } from "./Task";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class TaskService{
    private url : string = "http://localhost:8080/task";
    private url1 : string ="http://localhost:8080/Status";
    constructor(private http : HttpClient){}

    getTask() : Observable<ITask[]>{
        return this.http.get<ITask[]>(this.url);
    }
    getStatus(status:string) : Observable<any>{
        return this.http.get<any>(`${this.url1}/${status}`);
    }
    
    
}