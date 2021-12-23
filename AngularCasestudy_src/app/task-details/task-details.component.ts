import { Component, OnInit } from '@angular/core';
import { TaskService } from '../TaskService';
import { ITask } from '../Task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  public Task! : ITask[];

  constructor(private taskservice : TaskService) { }

  ngOnInit(): void {
    this.taskservice.getTask()
    .subscribe(data => this.Task = data)
  }

}
