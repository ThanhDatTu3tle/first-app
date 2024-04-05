import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['../../../../../node_modules/primeflex/primeflex.scss']
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
  onChangePassword: any;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { sessionStorage.clear() }

  ngOnInit(): void {
    this.getUserLocation();
    this.loginForm = this.formBuilder.group({
      login_name: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.required),
      rememberMe: false
    })
  }

  // Cách 1:
  login(): void {
    let payload = {
      login_name: this.loginForm.value.login_name,
      password: this.loginForm.value.password
    }
    this.loginService.postLogin(payload).subscribe(
      (data: any) => {
        if (data.result === "OK") {
          sessionStorage.setItem('id', data.data.employee[0].id);
          sessionStorage.setItem('role', data.data.employee[0].role);
          sessionStorage.setItem('employee_code', data.data.employee[0].employee_code);
          sessionStorage.setItem('employee_name', data.data.employee[0].employee_name);
          sessionStorage.setItem('card_number', data.data.employee[0].card_number);
          sessionStorage.setItem('mobile', data.data.employee[0].mobile);
          sessionStorage.setItem('birthday', data.data.employee[0].birthday);
          sessionStorage.setItem('email', data.data.employee[0].email);
          sessionStorage.setItem('image', data.data.employee[0].image);
          sessionStorage.setItem('image_card_before', data.data.employee[0].image_card_before);
          sessionStorage.setItem('image_card_after', data.data.employee[0].image_card_after);
          sessionStorage.setItem('login_name', this.loginForm.value.login_name);
          sessionStorage.setItem('passEncrypt', this.loginForm.value.password);
          sessionStorage.setItem('manager_id', data.data.employee[0].manager_id);
          sessionStorage.setItem('manager_code', data.data.employee[0].manager_code);
          sessionStorage.setItem('manager_name', data.data.employee[0].manager_name);
          sessionStorage.setItem('manager_samsung', data.data.employee[0].manager_samsung);
          this.router.navigate(['dashboard']);
        }
      }
    )
  }

  // Cách 2:
  // login(): void {
  //   let login_name = this.loginForm.value.login_name;
  //   let password = this.loginForm.value.password;
  //   this.loginService.postLogin2(login_name, password).subscribe(
  //     (data: any) => {
  //       if (data.result === "OK") {
  //         sessionStorage.setItem('login_name', this.loginForm.value.login_name);
  //         this.router.navigate(['dashboard']);
  //       }
  //     }
  //   )
  // }

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

  // proceedLogin(): void {
  //   this.loginService.getAllEmployees().subscribe((employees: any) => {
  //     if (employees.find((item: any) => item.email === this.loginForm.value.email) &&
  //       employees.find((item: any) => item.passEncrypt === this.loginForm.value.password)
  //     ) {
  //       let user = employees.find((item: any) => item.email === this.loginForm.value.email);
  //       this.router.navigate(['dashboard']);
  //     } else {
  //       this.router.navigate(['auth/error']);
  //     }
  //   });
  // }
}
