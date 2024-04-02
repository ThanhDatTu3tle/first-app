import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss',
  '../../../../node_modules/primeflex/primeflex.scss'],
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
    "manager_type_id": sessionStorage.getItem('manager_type_id'),
    "manager_id": sessionStorage.getItem('manager_id'),
    "manager_code": sessionStorage.getItem('manager_code'),
    "manager_name": sessionStorage.getItem('manager_name'),
  };

  valueConfirmPass: string = "";
  date: Date | undefined;

  constructor(private messageService: MessageService) {}

  onUpload(event: UploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }
}
