import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Example } from './Example';
import { MyComponent } from './MyComponent';
import { MyComponent1 } from './MyComponent1';
import { IfExample } from './IfExample';
import { CustomDirective } from './CustomDirective';
import { ProductComponent } from './ProductComponent';
import { ProComponent } from './ProComponent';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { CustomSortPipe } from './CustomSortPipe';
import { FormsExample } from './FormsExample';
import { ReactiveFormExample } from './ReactiveFormExample';
import { TaskForm } from './TaskForm';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { PostExampleComponent } from './post-example/post-example.component';
import { MyModule } from './MyModule';
import { PostTaskComponent } from './post-task/post-task.component';
import { UserFormComponent } from './user-form/user-form.component';


import { UpdateNotesComponent } from './update-notes/update-notes.component';
import { GetStatusComponent } from './get-status/get-status.component';
import { UpdatePriorityComponent } from './update-priority/update-priority.component';
import { UpdateBookmarkComponent } from './update-bookmark/update-bookmark.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { GetTaskComponent } from './get-task/get-task.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PostUserComponent } from './post-user/post-user.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  declarations: [
    AppComponent, MyComponent, MyComponent1,
    FormsExample, Example, ReactiveFormExample,
    IfExample, CustomDirective, TaskForm,
    TaskDetailsComponent, 
    ProductComponent, ProComponent, PostExampleComponent,
    PostTaskComponent, UserFormComponent,
    EmployeeDetailsComponent, UpdateNotesComponent,
    PipeExampleComponent, 
    CustomSortPipe, EmployeeDetailsComponent, TaskDetailsComponent, PostExampleComponent, 
    PostTaskComponent, UserFormComponent, UpdateNotesComponent, 
    GetStatusComponent, UpdatePriorityComponent, UpdateBookmarkComponent, DeleteTaskComponent, GetTaskComponent,
    UserDetailsComponent,
    PostUserComponent,
    AssignTaskComponent,
    LoginComponent,
    AdminHomeComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule, MyModule,
    ReactiveFormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
