import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from '../Model/data-type';
import { BehaviorSubject } from 'rxjs';
import { TimeScale } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  isLoggedIn = new BehaviorSubject<boolean>(false);
  token: any;
  _server = "http://192.168.10.215:8080";

  constructor(private http:HttpClient, private router:Router) { }

  userLogin(data: Login){
    return this.http.get(`${this._server}/handi-ear/api/user/login?username=${data.username}&password=${data.password}`).subscribe({
     next:(res)=>{
      
        console.log(res)
       this.token = res;
       console.log("token",this.token.auth_token);
      localStorage.setItem('auth_token', this.token.auth_token);
        this.router.navigate(['fuel',
        {outlets:{'metroCity':['dashboard']}
      }]);
      },
      error:(err)=>{
        console.log(err.error)
      }
    })  
  }

  removeTokenOnLogout(){
    this.router.navigate(['login']);
    localStorage.clear();
  }

  //getting chart info from api 
  GetChartInfo(){
    return this.http.get("")
  }
}
