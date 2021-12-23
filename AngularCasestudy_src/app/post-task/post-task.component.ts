import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms"; 
import { DataService } from './DataService';
import { postData, respData } from './PostDataObj';

@Component({
  selector: 'app-post-task',
  templateUrl: './post-task.component.html',
  styleUrls: ['./post-task.component.css']
})
export class PostTaskComponent implements OnInit {
  form:any;
  task_ID!:number;
  owner_ID!:number;
  creator_ID!:number;
  name!:string;
  description!:string;
  status!:string;
  priority!:string;
  notes!:string;
  isBookmarked!:Boolean;
  created_On!:Date;
  status_Changed_On!:Date;

  data!:string;

  posData!:postData;

  resultData!:respData;

  public users:any =[];

  constructor(private dataService:DataService) { }

  ngOnInit(){
    this.form=new FormGroup({
      task_ID : new FormControl(""),
      owner_ID : new FormControl(""),
      creator_ID : new FormControl(""),
      name : new FormControl(""),
      description : new FormControl(""),
      status : new FormControl(""),
      priority : new FormControl(""),
      notes : new FormControl(""),
      isBookmarked : new FormControl(""),
      created_On : new FormControl(""),
      status_Changed_On : new FormControl("")
      //this.task_ID:new FormControl(
        //  "",
          //Validators.compose([Validators.required,Validators.minLength(3)])
      //),
     // ownerid:new FormControl("",Validators.compose([Validators.required])),
      //creatorid:new FormControl("",Validators.compose([Validators.required])),
      //name:new FormControl("",Validators.compose([Validators.required,Validators.minLength(5)])),
      //descrptn:new FormControl("",Validators.compose([Validators.required,,Validators.minLength(5)])),
      //status:new FormControl("",Validators.compose([Validators.required])),
      //priority:new FormControl("",Validators.compose([Validators.required])),
      //notes:new FormControl("",Validators.compose([Validators.required])),
      //isbookmarked:new FormControl("",Validators.compose([Validators.required])),
      //created_on:new FormControl("",Validators.compose([Validators.required])),
      //status_changed_on:new FormControl("",Validators.compose([Validators.required]))

  });
}

  

  onSubmit(user:any){

    console.log(user);
    this.posData=new postData();

    this.posData.task_ID=user.task_ID;
    this.posData.owner_ID=user.owner_ID;
    this.posData.creator_ID=user.creator_ID;
    this.posData.name=user.name;
    this.posData.description=user.description;
    this.posData.status=user.status;
    this.posData.priority=user.priority;
    this.posData.notes=user.notes;
    this.posData.isBookmarked=user.isBookmarked;
    this.posData.created_On=user.created_On;
    this.posData.status_Changed_On=user.status_Changed_On;
    console.log(this.posData);
    this.dataService.addPost(this.posData)
    .subscribe(
      data=>console.log(data)
      
    )
    alert("Task Added Successfully");


    
}


   /* sendData(){

      this.posData=new postData();

      this.posData.body="test data2";

      this.posData.title="Some Title";
      this.posData.userId=13;
this.dataService.addPost(this.posData)
console.log(this.posData);*/
 // .subscribe((res : respData) =>{
 // this.resultData = res;
 // console.log(this.resultData.id);
 // this.data=this.resultData.id+ "-" + this.resultData.title;
 // });

}
