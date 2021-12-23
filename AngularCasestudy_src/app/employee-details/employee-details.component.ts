import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Employee-service.service';
import { IEmployee } from '../Employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employees! : IEmployee[];

  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(data => this.employees = data)
  }

}
