import { Component, OnInit } from '@angular/core';
import {SidebarService} from '../services/sidebar.service'
import {FormControl, FormGroupDirective, NgForm, Validators,FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    //replace with .pattern() for email with a better one I have.
  ]);

  loginForm = new FormGroup({
    usernameControl: new FormControl('', [
      ]),
    passwordControl: new FormControl('', [
      ])
  });

  usernameMatcher = new MyErrorStateMatcher();

  matcher = new MyErrorStateMatcher();

  constructor(private sidebar:SidebarService) { }

  ngOnInit() {
    setTimeout(()=>{
      this.sidebar.toggle();  
    },0);
  }
  onSubmit(){
    console.log(this.loginForm.value);
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
