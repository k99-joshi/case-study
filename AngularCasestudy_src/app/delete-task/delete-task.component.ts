import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeleteTaskService } from './DeleteTaskService';
import { DeleteTaskInterface } from './DeleteTaskInterface';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {
  public tasks!:DeleteTaskInterface[];
  form5:any;
  task_ID!:number;

  constructor(private d : DeleteTaskService) { }

  ngOnInit(): void {
    this.form5=new FormGroup({
      task_ID:new FormControl(
      "",
      Validators.compose([Validators.required])
      )
      
      });

  }
  onSubmit(task2:any) {
    this.d.deleteTask(task2.task_ID).subscribe(data=>this.tasks=data)
    }

}
