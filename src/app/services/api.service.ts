import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Department, Login, Stores, Supplier, Vehicles } from '../Model/data-type';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  isLoggedIn = new BehaviorSubject<boolean>(false);
  token: any;
  _server = "http://192.168.10.215:8080";
  baseUrl="http://192.168.10.215:8081/nmc-api/"


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
        alert("Invalid username/password")
      }
    })  
  }

  removeTokenOnLogout(){
    this.router.navigate(['login']);
    localStorage.clear();
  }

///////////////////////////////////////////////////// Purchase ///////////////////////////////////////////////

  //-----------------get Purchase-------------------------------------------- //
  getPurchase(){
    return this.http.get(`${this.baseUrl}purchase/all`)
  }


  //-----------------Add Purchase-------------------------------------------- //
  
  addPurchase(purchase: any){
    return this.http.post<any>(`${this.baseUrl}purchase/add`, purchase);
  }

///////////////////////////////////////////////////// Supplier ///////////////////////////////////////////////

   //-----------------get Supplier-------------------------------------------- //
  getSupplier(){
    return this.http.get(`${this.baseUrl}suplier/all`)
  }

   //-----------------Add Supplier-------------------------------------------- //
  addSupplier(suplier: Supplier){
    return this.http.post<any>(`${this.baseUrl}suplier/add`, suplier);
  }

  ///////////////////////////////////////////////////// Departments ///////////////////////////////////////////////

  //-----------------get Department-------------------------------------------- //
  getDepartment(){
    return this.http.get(`${this.baseUrl}department/all`)
   }

  //-----------------add Department-------------------------------------------- //
  addDepartment(department: Department){
    return this.http.post<any>(`${this.baseUrl}department/add`,department)
    }
 
  ///////////////////////////////////////////////////// Vehicles ///////////////////////////////////////////////
 
 //-----------------get Vehicle-------------------------------------------- //
  getVehicle(){
   return this.http.get(`${this.baseUrl}vehicle/all`)
  }

  //-----------------add Vehicle-------------------------------------------- //
  addVehicle(vehicle:Vehicles){
  return this.http.post<any>(`${this.baseUrl}vehicle/add`,vehicle)
  }

 ///////////////////////////////////////////////////// User /////////////////////////////////////////////// 

 //-----------------get User-------------------------------------------- //
 getUser(){
  return this.http.get(`${this.baseUrl}user/all`)
 }

 //-----------------add User-------------------------------------------- //
 addUser(user:any){
 return this.http.post<any>(`${this.baseUrl}user/add`,user)
 }

 ///////////////////////////////////////////////////// Stores ///////////////////////////////////////////////
  
 getStores(){
  return this.http.get(`${this.baseUrl}store/all`)
 }

 //-----------------add User-------------------------------------------- //
 addStores(stores: Stores){
 return this.http.post<any>(`${this.baseUrl}store/add`,stores)
 }
}
