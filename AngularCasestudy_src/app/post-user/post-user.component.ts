import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from "@angular/forms"; 
import { UserService } from './UserService';
import { PostData, RespData } from './PostUserObj';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent implements OnInit {
  form7:any;
  user_Id!:number;
  password!:string;
  username!:string;
  email!:string;
  first_Name!:string;
  last_Name!:string;
  contact_Number!:number;
  role!:string;
  isactive!:Boolean;
  dob!:Date;
  created_on!:Date;

  data!:string;

  posData!:PostData;

  resultData!:RespData;

  public users:any =[];

  constructor(private s :UserService) { }

  ngOnInit(): void {
    this.form7=new FormGroup({
      user_Id : new FormControl(""),
      password : new FormControl(""),
      username : new FormControl(""),
      email : new FormControl(""),
      first_Name: new FormControl(""),
      last_Name : new FormControl(""),
      contact_Number : new FormControl(""),
      role : new FormControl(""),
      isactive : new FormControl(""),
      dob : new FormControl(""),
      created_on : new FormControl("")
  });
}
onSubmit(user:any){

  console.log(user);
  this.posData=new PostData();

  this.posData.user_Id=user.user_Id;
  this.posData.password=user.password;
  this.posData.username=user.username;
  this.posData.email=user.email;
  this.posData.first_Name=user.first_Name;
  this.posData.last_Name=user.last_Name;
  this.posData.contact_Number=user.contact_Number;
  this.posData.role=user.role;
  this.posData.isactive=user.isactive;
  this.posData.dob=user.dob;
  this.posData.created_on=user.created_on;
  console.log(this.posData);
  this.s.addUser(this.posData)
  .subscribe(
    data=>console.log(data)
  )
}
}
