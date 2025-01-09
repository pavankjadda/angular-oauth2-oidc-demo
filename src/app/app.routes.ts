import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeViewComponent } from './employee/employee-view.component';
import {ReadOnlyUserAuthGuard} from './read-only-user-auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent,canActivate: [ReadOnlyUserAuthGuard] },
  { path: 'employee/list', component: EmployeeListComponent,canActivate: [ReadOnlyUserAuthGuard] },
  { path: 'employee/:id', component: EmployeeViewComponent,canActivate: [ReadOnlyUserAuthGuard] },
];
