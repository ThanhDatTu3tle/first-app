import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss',
  '../../../../node_modules/primeflex/primeflex.scss']
})
export class UserProfileComponent {
  employeesData: any = {
    "id": sessionStorage.getItem('id'),
    "role": sessionStorage.getItem('role'),
    "employee_name": sessionStorage.getItem('employee_name'),
    "email": sessionStorage.getItem('email'),
    "passEncrypt": sessionStorage.getItem('passEncrypt')
  };

  constructor() {
    // console.log(this.employeesData);
  }
}
