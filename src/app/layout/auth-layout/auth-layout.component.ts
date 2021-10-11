import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  username: '';
  password: '';
  constructor( private loginService: LoginService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.password, this.username)
    this.loginService.login({username: this.username, password: this.password}).subscribe(res => {
      if (res.data.tokenAuth.success) {
        this.toastr.success('LoggedIn Successfully');
        localStorage.setItem('userAccess','true');
        localStorage.setItem('userName', this.username);
        this.router.navigate(['/list']);
      }
      if (res.data.tokenAuth.errors["nonFieldErrors"][0].message) {
        this.toastr.error(res.data.tokenAuth.errors["nonFieldErrors"][0].message);
      }
    }, error => {
      this.toastr.error(error);
    })
  }
}
