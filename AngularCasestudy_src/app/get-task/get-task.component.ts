import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetTaskService } from './GetTaskService';
import { GetTaskInterface } from './GetTaskInterface';

@Component({
  selector: 'app-get-task',
  templateUrl: './get-task.component.html',
  styleUrls: ['./get-task.component.css']
})
export class GetTaskComponent implements OnInit {
  public tasks!:GetTaskInterface[];
  form6:any;
  task_ID!:number;

  constructor(private gt : GetTaskService) { }

  ngOnInit(): void {
    this.form6=new FormGroup({
      task_ID:new FormControl(
      "",
      Validators.compose([Validators.required])
      )
      
      });
  }
  onSubmit(task3:any) {
    this.gt.getTask(task3.task_ID).subscribe(data=>this.tasks=data)
    }

}
