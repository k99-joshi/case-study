import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateBookmarkService } from './UpdateBookmarkService';
import { UpdateBookmarkInterface } from './UpdateBookmarkInterface';


@Component({
  selector: 'app-update-bookmark',
  templateUrl: './update-bookmark.component.html',
  styleUrls: ['./update-bookmark.component.css']
})
export class UpdateBookmarkComponent implements OnInit {
  public tasks!:UpdateBookmarkInterface[];
  form4:any;
  task_ID!:number;
  isBookmarked!:boolean;

  constructor(private ub : UpdateBookmarkService) { }

  ngOnInit(): void {
    this.form4=new FormGroup({
      task_ID:new FormControl(
      "",
      Validators.compose([Validators.required])
      ),
      isBookmarked:new FormControl("",Validators.compose([Validators.required]))
      
      });
  }
  onSubmit(task1:any) {
    this.ub.updateBookmark(task1.task_ID,task1.isBookmarked).subscribe(data=>this.tasks=data)
    alert("Bookmark Updated");
    }

}
