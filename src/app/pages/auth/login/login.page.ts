import { StorageService } from './../../../services/storage/storage.service';
import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import showLoading from 'src/app/helpers/loading';
import showToast from 'src/app/helpers/toast';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  async login() {
    console.log(this.form.value);
    await this.authService.login(this.form.value).subscribe(
      (data) => {
        this.storageService.set('user', data);
        showLoading({ message: 'Verificando...', url: '/home', router: this.router });
      },
      ({status}) => {
        if (status === 401) {
          showToast({ message: 'Usuario o contraseña incorrectos', type: 'error'});
        }
      }
    );
  }

  getValue(key, { target: { value } }) {
    this.form.get(key).setValue(value);
  }

  redirectTo(){
    this.router.navigateByUrl('/auth/register');
  }

}
