import { Component, SimpleChanges } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserProfileService } from './user-profile.service';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['../../../../node_modules/primeflex/primeflex.scss'],
  providers: [MessageService]
})
export class UserProfileComponent {
  employeesData: any = {
    "id": sessionStorage.getItem('id'),
    "role": sessionStorage.getItem('role'),
    "employee_code": sessionStorage.getItem('employee_code'),
    "employee_name": sessionStorage.getItem('employee_name'),
    "card_number": sessionStorage.getItem('card_number'),
    "mobile": sessionStorage.getItem('mobile'),
    "birthday": sessionStorage.getItem('birthday'),
    "email": sessionStorage.getItem('email'),
    "image": sessionStorage.getItem('image'),
    "image_card_before": sessionStorage.getItem('image_card_before'),
    "image_card_after": sessionStorage.getItem('image_card_after'),
    "login_name": sessionStorage.getItem('login_name'),
    "passEncrypt": sessionStorage.getItem('passEncrypt'),
    "manager_id": sessionStorage.getItem('manager_id'),
    "manager_code": sessionStorage.getItem('manager_code'),
    "manager_name": sessionStorage.getItem('manager_name'),
    "manager_samsung": sessionStorage.getItem('manager_samsung'),
  };

  valueConfirmPass: string = "";
  date: Date | undefined;

  constructor(
    private messageService: MessageService,
    private userProfile: UserProfileService
  ) {}

  // ngOnChanges(changes: SimpleChanges) {
  //   // changes.prop contains the old and the new value...
  // }

  onUpload(event: UploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  onChangePassword() {
    console.log(this.valueConfirmPass)
    this.userProfile.changePassword("f4d0f088-17e2-435d-9a8e-bb252799ec93", this.valueConfirmPass)
  }
}
