import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import validateForm from 'src/app/auth/validator/validateform';
import { Stores } from 'src/app/Model/data-type';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-inventory-stores',
  templateUrl: './inventory-stores.component.html',
  styleUrls: ['./inventory-stores.component.css']
})
export class InventoryStoresComponent implements OnInit {
  addStorefg!:FormGroup
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.addStorefg = new FormGroup({
      storeName: new FormControl("", Validators.required),
      inchargeName: new FormControl("", Validators.required),
      contactNumber: new FormControl("", Validators.required),
      stockCapacity: new FormControl("", Validators.required),
      storeAddress: new FormControl("", Validators.required),
    })
  }

  storeModel = new Stores("","","","","");
  onSubmit(){
    // if(this.addStorefg.valid){
      console.log(this.storeModel)

      // this.api.addStores(this.storeModel).subscribe({
      //   next:(res)=>{
      //     console.log("Success!",res)
      //   },
      //   error:(err)=>{
      //     console.log("Error!",err)
      //   }
      // })

    // }else{
    //   validateForm.validateAllFormFields(this.addStorefg);
    // }
    if(this.addStorefg.valid){
       this.api.addStores(this.storeModel).subscribe({
        next:(res)=>{
          console.log("Success!",res)
          this.Stores()
        },
        error:(err)=>{
          console.log("Error!",err)
        }
      })
    }
    else{
      validateForm.validateAllFormFields(this.addStorefg);
    }
}
Submit(){
  console.log(this.storeModel)
}
allStores
Stores() {
  // department get
  this.api.getStores().subscribe({
    next: (res) => {
      this.allStores = res;
    },
  });
}
}
