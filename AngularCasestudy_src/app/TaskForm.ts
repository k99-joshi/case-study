import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl,  Validators} from "@angular/forms";

@Component({
    selector : "Task-Form",
    templateUrl : "./TaskForm.html"
})
export class TaskForm implements OnInit{
    form : any;
    name! : string;
    Task_ID! : number;
    Owner_ID! : number;
    Creator_ID! : number;
    Name! : string;
    Description! : string;
    Status! : string;
    Priority! : string;
    Notes! : string;
    IsBookmarked! : string;
    Created_On! : Date;
    Status_Changed_On! : Date;
    ngOnInit(){
        this.form = new FormGroup({
            Task_ID : new FormControl(""),
            Owner_ID : new FormControl(""),
            Creator_ID : new FormControl(""),
            Name : new FormControl(""),
            Description : new FormControl(""),
            Status : new FormControl(""),
            Priority : new FormControl(""),
            Notes : new FormControl(""),
            IsBookmarked : new FormControl(""),
            Created_On : new FormControl(""),
            Status_Changed_On : new FormControl("")
        });
    }
    onSubmit(user : any){
        console.log(user);
        this.Task_ID = user.Task_ID;
        this.Owner_ID = user.Owner_ID;
        this.Creator_ID = user.Creator_ID;
        this.Name = user.Name;
        this.Description = user.Description;
        this.Status = user.Status;
        this.Priority = user.Priority;
        this.Notes = user.Notes;
        this.IsBookmarked = user.IsBookmarked;
        this.Created_On = user.Created_On;
        this.Status_Changed_On = user.Status_Changed_On;
        
    }
    
}