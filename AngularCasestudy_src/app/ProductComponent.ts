import { Component } from "@angular/core";

@Component({
        selector:"my-prod",
        template: `
        <div>
            <h1>Product Details: </h1>
            <h2>product Id : {{ProdId}}</h2>
            <h2>product Name :{{ProdName}}</h2>
            <h2>product Price :{{ProdPrice}}</h2>
            <hr>
        </div>
        `,
    })
export class ProductComponent{
    ProdId : number= 100
    ProdName: string  = "Soup"
    ProdPrice : number = 20
}