import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/_core/helpers/must-match.validator';
import { DataService } from '../../../_core/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide: boolean = true;
  hideConfirm: boolean = true;
  submitted: boolean = false;
  registerForm: FormGroup;
  loginStatus: boolean = false;
  constructor(
    private fb: FormBuilder,
    private dataService: DataService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(9)]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}')]],
      passwordConfirm: ['', [Validators.required]],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
        validator: MustMatch('password', 'passwordConfirm')
      })
  }

  get f() { return this.registerForm.controls; }

  Register() {
    this.submitted = true;
    const objUser = {
      taiKhoan: this.registerForm.value.email,
      matKhau: this.registerForm.value.password,
      email: this.registerForm.value.email,
      soDT: this.registerForm.value.phone,
      maNhom: "GP15",
      maLoaiNguoiDung: "",
      hoTen: ""
    };

    const uri = `QuanLyNguoiDung/DangKy`;
    this.dataService.post(uri, objUser).subscribe((data: any) => {
      Swal.fire({
        toast: true,
        type: 'success',
        html:
          "Try " +
          "<a href='/account/signin'><strong>log in?</strong></a>",
        position: 'bottom-right',
        timer: 10000,
        showConfirmButton: false
      })
    }, err => {
      console.log(err);
      if (err === "Email đã tồn tại!") {
        Swal.fire({
          toast: true,
          type: 'info',
          timer: 4000,
          title: 'Account already exist!',
          position: 'center',
          showConfirmButton: false
        })
      }
    });
  }

}
