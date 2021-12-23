import { Component } from "@angular/core";
import { MyService } from "./MyService";

@Component({
    selector : "my-com",
    template :`
        <div>
            <h1>Welcome to Sonata {{name}}</h1>
            <ul *ngFor = "let h of heros">
            <li>{{h}}</li>
            </ul>
            <h1>{{name1}}</h1>
        </div>
        `,
        providers : [MyService]
        
})
export class MyComponent {
    name1! : string;
    constructor(private sr: MyService ){
        this.name1 = sr.getName();
    }
    name : string = "Kalyani";
    heros = ["Rajanikanth","Amitab","Rishi Kapoor","Rajkumar"];
}