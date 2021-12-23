import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from './UserDetailsService';
import { UserDetailsInterface } from './UserDetailsInterface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public Users! : UserDetailsInterface[];

  constructor(private us : UserDetailsService) { }

  ngOnInit(): void {
    this.us.getUsers()
    .subscribe(data => this.Users = data)
  }

}
