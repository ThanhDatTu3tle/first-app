import { Component, OnInit } from '@angular/core';
import { TaskListService } from './tasklist.service';
import { UserProfileService } from '../../user-profile/user-profile.service';

import { MenuItem } from 'primeng/api';

interface Months {
  name: string;
}
interface Status {
  name: string;
}
interface TestingStatus {
  name: string;
}

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['../../../../../node_modules/primeflex/primeflex.scss']
})
export class TasklistComponent implements OnInit {
  items: MenuItem[] = [];
  home!: MenuItem;

  months: Months[] = [];
  selectedMonths!: Months;
  users: any = [];
  selectedUser!: any;
  status: Status[] = [];
  selectedStatus!: Status;
  testingStatus: TestingStatus[] = [];
  selectedTestingStatus!: TestingStatus;
  valueTag: string = '';
  valueTaskID: string = '';

  tasklists: any = [];
  taskInToDo: any = [];
  taskInProcess: any = [];
  taskCompleted: any = [];
  taskClosed: any = [];
  slBug: any = [];
  slTaskLate: any = [];
  employeeInProcess: any = [];

  constructor(private taskListService: TaskListService) { }

  ngOnInit() {
    // Breadcrumb
    this.items = [{ label: 'Workfollow' }, { label: 'Task list' }];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
    
    // Dropdown selector
    this.months = [
      { name: 'Tháng 01' },
      { name: 'Tháng 02' },
      { name: 'Tháng 03' },
      { name: 'Tháng 04' },
      { name: 'Tháng 05' },
      { name: 'Tháng 06' },
      { name: 'Tháng 07' },
      { name: 'Tháng 08' },
      { name: 'Tháng 09' },
      { name: 'Tháng 10' },
      { name: 'Tháng 11' },
      { name: 'Tháng 12' },
    ];
    this.status = [
      { name: 'ToDo' },
      { name: 'Develop' },
      { name: 'Deploy' },
      { name: 'Completed' },
      { name: 'Reject' },
      { name: 'Close' },
    ];
    this.testingStatus = [
      { name: 'Wait Dev' },
      { name: 'Testing' },
      { name: 'Error' },
      { name: 'Pending' },
      { name: 'No-Test' },
      { name: 'Pass' },
      { name: 'Re-open' },
    ];
    this.taskListService.getAllEmployees().subscribe((employees: any) => {
      this.users = employees;
    });

    // Statistical
    this.taskListService.getAllTaskList().subscribe((tasklist: any) => {
      this.tasklists = tasklist;
      this.taskInToDo = tasklist.filter((item: { status: string; }) => item.status === "ToDo");
      this.taskInProcess = tasklist.filter((item: { status: string; }) => item.status === "Develop");
      this.taskCompleted = tasklist.filter((item: { status: string; }) => item.status === "Completed");
      this.taskClosed = tasklist.filter((item: { status: string; }) => item.status === "Close");
      this.employeeInProcess = this.taskInProcess;
    })
  }
}
