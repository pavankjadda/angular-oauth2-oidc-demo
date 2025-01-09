import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Employee List</h2>
    <ul>
      <li><a [routerLink]="['/employee', 1]">Employee 1</a></li>
      <li><a [routerLink]="['/employee', 2]">Employee 2</a></li>
      <li><a [routerLink]="['/employee', 3]">Employee 3</a></li>
    </ul>
  `,
})
export class EmployeeListComponent {}