import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',
  '../../../../../node_modules/primeflex/primeflex.scss']
})
export class LoginComponent {
  valCheck: string[] = ['remember'];
  password!: string;
  lat!: string;
  lng!: string;
  data: any;
  address!: string;
  loading: boolean = false;
  result: any;
  employees: any = [];

  loginForm!: FormGroup;

  constructor(
    private loginService: LoginService,
    private builder: FormBuilder,
    private router: Router
  ) { sessionStorage.clear() }

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false
    }, 2000);
  }

  success(pos: { coords: any; }) {
    var crd = pos.coords;

    localStorage.setItem('latitude', crd.latitude);
    localStorage.setItem('longitude', crd.longitude);
  };

  error(err: { code: any; message: any; }) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  getUserLocation() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);

      this.lat = localStorage.getItem('latitude') || '';
      this.lng = localStorage.getItem('longitude') || '';
      this.loginService.getGeolocation(this.lat, this.lng).subscribe((val: any) => {
        this.data = val;
        this.address = this.data.results[0].formatted;
        localStorage.setItem('currentAddress', this.address);
      });
    } else {
      console.error("User not allow");
    }
  };

  proceedLogin(): void {
    this.loginService.getAllEmployees().subscribe((employees: any) => {
      if (employees.find((item: any) => item.email === this.loginForm.value.email) &&
        employees.find((item: any) => item.passEncrypt === this.loginForm.value.password)
      ) {
        let user = this.loginService.employees.find((item: any) => item.email === this.loginForm.value.email);
        sessionStorage.setItem('id', user.id);
        sessionStorage.setItem('role', user.role);
        sessionStorage.setItem('employee_code', user.employee_code);
        sessionStorage.setItem('employee_name', user.employee_name);
        sessionStorage.setItem('card_number', user.card_number);
        sessionStorage.setItem('mobile', user.mobile);
        sessionStorage.setItem('birthday', user.birthday);
        sessionStorage.setItem('email', this.loginForm.value.email);
        sessionStorage.setItem('image', user.image);
        sessionStorage.setItem('image_card_before', user.image_card_before);
        sessionStorage.setItem('image_card_after', user.image_card_after);
        sessionStorage.setItem('login_name', user.login_name);
        sessionStorage.setItem('passEncrypt', this.loginForm.value.password);
        sessionStorage.setItem('manager_type_id', user.manager_type_id);
        sessionStorage.setItem('manager_id', user.manager_id);
        sessionStorage.setItem('manager_code', user.manager_code);
        sessionStorage.setItem('manager_name', user.manager_name);
        this.router.navigate(['']);
      } else {
        this.router.navigate(['auth/error']);
      }
    });
  }

  ngOnInit(): void {
    this.getUserLocation();
    this.loginForm = this.builder.group({
      email: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required),
      rememberMe: false
    });
  }
}
