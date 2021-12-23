import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable } from "rxjs";
import { GetTaskInterface } from "./GetTaskInterface";

@Injectable({
    providedIn : 'root'
})

export class GetTaskService{
    
    
    constructor(private http : HttpClient){}

    getTask(task_ID : number) : Observable<GetTaskInterface[]>{
        return this.http.get<GetTaskInterface[]>("http://localhost:8080/Task_ID/"+task_ID);
    }
    
    
    
}