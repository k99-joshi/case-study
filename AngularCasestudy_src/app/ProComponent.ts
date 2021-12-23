import { Component } from "@angular/core";

@Component({
    selector : "pro-com",
    template : `
    <div>
        <img src = "./assets/fruit.PNG" alt="fruit" height = "200">
        <h2>product Name: {{name}}</h2>
        <h2>Product Price : {{price}}</h2>
    </div>
    `
})
export class ProComponent{
    name : string = "Fruit";
    price : number = 500;
}