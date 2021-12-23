import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { FormsExample } from './FormsExample';
import { GetTaskComponent } from './get-task/get-task.component';
import { LoginComponent } from './login/login.component';
import { PostTaskComponent } from './post-task/post-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskForm } from './TaskForm';
import { UpdateBookmarkComponent } from './update-bookmark/update-bookmark.component';
import { UpdateNotesComponent } from './update-notes/update-notes.component';
import { UpdatePriorityComponent } from './update-priority/update-priority.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path : 'GetTaskByID', component : GetTaskComponent},
  {path : 'GetAllTasks', component : TaskDetailsComponent},
  {path : 'AddTask' , component : PostTaskComponent},
  {path : '', redirectTo:'/login', pathMatch:'full'},
  {path : 'UpdateBookmark', component : UpdateBookmarkComponent},
  {path : 'UpdateNotes' , component : UpdateNotesComponent},
  {path : 'UpdatePriority', component : UpdatePriorityComponent},
  {path : 'DeleteTask' , component : DeleteTaskComponent},
  {path : 'Users' , component : UserDetailsComponent},
  {path : 'AssignTask' ,component : AssignTaskComponent},
  {path : 'login', component : LoginComponent},
  {path : 'ADMIN' , component : AdminHomeComponent}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
