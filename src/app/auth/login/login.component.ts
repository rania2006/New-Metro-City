import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/Model/data-type';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm!: FormGroup;
  submitted = false;
  constructor(private formbuilder: FormBuilder, private userApi:ApiService, private router:Router) { }

  //ngOnInit will triggered as soom the component is initialized first in the browser
  ngOnInit(): void {
    //validations
    this.LoginForm = this.formbuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  //login function
  onSubmit(data: Login){
    
    this.submitted = true;

    if(this.LoginForm.valid){
      console.log(this.LoginForm.value);
      this.userApi.userLogin(data);
    }
   else{
    this.onInvalidLoginEntries();
   }
  }
  
  onInvalidLoginEntries(){
    return alert("Incorrect email/password");
  }

}
