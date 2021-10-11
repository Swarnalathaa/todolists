import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username = '';
  password = '';
  email = '';

  constructor( private registerService: LoginService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  register() {
    const payload = {
      username: this.username,
      password: this.password,
      email: this.email
    }
    this.registerService.register(payload).subscribe(res => {
      if (res.data.register.success) {
        this.toastr.success('Registered Successffully');
        localStorage.setItem('userAccess','true');
        this.router.navigate(['/list']);
      }
      if (res.data.register.errors["email"][0].message) {
        this.toastr.error(res.data.register.errors["email"][0].message)
      }
      if (res.data.register.errors["password2"][0].message) {
        this.toastr.error(res.data.register.errors["password2"][0].message)
      }
    }, error => {
      this.toastr.error(error)
    })
  }

}
