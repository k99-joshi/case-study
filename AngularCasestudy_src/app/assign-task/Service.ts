import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Interface } from "./Interface";

@Injectable({ providedIn: 'root' })

export class Service {
    constructor(private http:HttpClient) { }
    assignTask(owner_ID:number,task_ID:number):Observable<Interface[]>{
    return this.http.get<Interface[]>("http://localhost:8080/Owner_ID/"+owner_ID+"/Task_ID/"+task_ID);
    }
}