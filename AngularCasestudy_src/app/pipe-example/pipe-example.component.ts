import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
    name = "SONATA";
    day = new  Date();
    arr = [10,30,20,50,40];
    price = 500;

  constructor() { }

  ngOnInit(): void {
  }

}
