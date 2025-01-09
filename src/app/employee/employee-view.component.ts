import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-view',
  standalone: true,
  template: `
    <h2>Employee View</h2>
    <p>Employee ID: {{ employeeId }}</p>
  `,
})
export class EmployeeViewComponent {
  employeeId: string;

  constructor(private route: ActivatedRoute) {
    this.employeeId = this.route.snapshot.params['id'];
  }
}