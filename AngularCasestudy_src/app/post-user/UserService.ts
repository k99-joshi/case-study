import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { PostData, RespData } from "./PostUserObj";

@Injectable({
    providedIn: 'root'
})

export class UserService{
      postUrl: string = "http://localhost:8080/createUser";
 
     httpOptions = {
         headers : new HttpHeaders({
             'Content-Type': 'application/json' , 'Authorization': 'my-auth-token'})
         };
 
         constructor(private httpClient : HttpClient) {
 
         }
 
         addUser (postD: PostData) {
            // return this.httpClient.post(this.postUrl, postD, this.httpOptions);
            return this.httpClient.post(this.postUrl, postD);
         }
     }