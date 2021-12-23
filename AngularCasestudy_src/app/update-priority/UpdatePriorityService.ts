import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import {UpdatePriorityInterface} from './UpdatePriorityInterface';

@Injectable({ providedIn: 'root' })

export class UpdatePriorityService{
    constructor(private http:HttpClient) { }
    updatePriority(task_ID:number,priority:string):Observable<UpdatePriorityInterface[]>{
    return this.http.get<UpdatePriorityInterface[]>("http://localhost:8080/Task_ID/"+task_ID+"/Priority/"+priority);
    }
}