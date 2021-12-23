import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdatePriorityInterface } from './UpdatePriorityInterface';
import { UpdatePriorityService } from './UpdatePriorityService';

@Component({
  selector: 'app-update-priority',
  templateUrl: './update-priority.component.html',
  styleUrls: ['./update-priority.component.css']
})
export class UpdatePriorityComponent implements OnInit {
  public t! :UpdatePriorityInterface[];
  form3 : any;
  task_ID!:number;
  priority!:string;

  constructor(private up : UpdatePriorityService) { }

  ngOnInit(): void {
    this.form3=new FormGroup({
      task_ID:new FormControl(
      "",
      Validators.compose([Validators.required])
      ),
      priority:new FormControl("",Validators.compose([Validators.required]))
      
      });
  }
  onSubmit(tasks : any){
    this.up.updatePriority(tasks.task_ID, tasks.priority).subscribe(data=>this.t=data)
    alert("Priority Updated");
  }

}
