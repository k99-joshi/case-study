import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './User';
import { UserServices } from './UserServices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  form1: any;

  userdata!: User;
  Username! : string;
  Password! : string;
  User :User = new User();

  constructor(private userService: UserServices) { }

  ngOnInit(): void {
    this.form1 = new FormGroup({
      Username: new FormControl("",
      Validators.compose([Validators.required,Validators.maxLength(10)])
   ),
   Password: new FormControl("",
     Validators.compose([Validators.required,Validators.maxLength(8)])
   )
 });

}

check(){
  this.userService.validate(this.Username, this.Password).subscribe(data=>{
    console.log(data);
    if(data==true){
      //this.gotoList();
      console.log("Welcome");
    }
  },error=>console.log(error));
}
//gotoList(){
  //this.router.navigateByUrl('tasks');
//}


    

}
