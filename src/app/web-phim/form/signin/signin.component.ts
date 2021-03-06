import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../../_core/services/data.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  hide: boolean = true;
  signInForm: FormGroup;
  isSubmitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.test();
  }
  test() {
    console.log('test local')
    localStorage.setItem('test', 'asdasd')
  }
  get f() { return this.signInForm.controls }

  signIn() {
    this.isSubmitted = true;
    const objUser = {
      taiKhoan: this.signInForm.value.email,
      matKhau: this.signInForm.value.password,
    };
    const uri = `QuanLyNguoiDung/DangNhap`;
    this.dataService.post(uri, objUser).subscribe((data: any) => {
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem('accessToken', data.accessToken);
      window.location.href = '/';
    }, err => {
      if (err === "Tài khoản hoặc mật khẩu không đúng!") {
        Swal.fire({
          toast: true,
          type: 'info',
          title: 'Email or Password is not match!',
          position: 'bottom-right',
          timer: 10000,
          showConfirmButton: false
        })
      }
    });
  }

}




