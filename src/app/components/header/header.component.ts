import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',
  '../../../../node_modules/primeflex/primeflex.scss']
})
export class HeaderComponent {
  routeToUser() {
    window.location.href = '/user-profile';
  }

  handleLogOut() {
    window.location.href = '/auth/login';
  } 
}
