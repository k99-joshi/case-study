import { Component } from "@angular/core";

@Component({
    selector : "my-ex",
    template :`
        <div>
            <h1>Here are my Fruits</h1>
            <ul *ngFor = "let f of fruits">
            <li>{{f}}</li>
            </ul>
        </div>
        `       
})
export class Example{
    fruits = ["apple", "mango", "banana"];
}