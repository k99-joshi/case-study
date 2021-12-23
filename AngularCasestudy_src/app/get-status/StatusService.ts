import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { GetStatusInterface } from "./getStatusInterface";

@Injectable({ providedIn: 'root' })

export class StatusService {
    constructor(private http:HttpClient) { }
    getStatus(status : string):Observable<GetStatusInterface[]>{
    return this.http.get<GetStatusInterface[]>("http://localhost:8080/Status/"+status);
    }
}