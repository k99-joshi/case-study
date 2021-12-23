import {Component} from "@angular/core";

@Component({
    selector : "template-form",
    templateUrl : "Forms.html"
})
export class FormsExample {
    name! : string;

    onSubmit(value : any){
        this.name = value.userName;
        console.log(value);
    }
}