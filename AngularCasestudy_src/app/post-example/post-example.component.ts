import { Component, OnInit } from '@angular/core';
import { DataService } from './DataService';
import {postData, respData} from './PostDataObj';

@Component({
  selector: 'app-post-example',
  templateUrl: './post-example.component.html',
  styleUrls: ['./post-example.component.css']
})
export class PostExampleComponent implements OnInit {
  data! : string;
  posData! : postData;
  resultData! : respData;
  public users : any = [];

  constructor(private dataService : DataService) { }

  ngOnInit(){
  }
    sendData(){
      this.posData = new postData();
      this.posData.name= "help";
      this.posData.status = "InProgress";
      this.posData.task_ID = 1005;
      this.dataService.addPost(this.posData)
      console.log(this.posData);
      //.subscribe((res : respData) =>{
       // this.resultData = res;
       // console.log(this.resultData.id);
        //this.data = this.resultData.id + "-" +this.resultData.title;
      //});
    }

}
