import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import validateForm from 'src/app/auth/validator/validateform';
import { Supplier } from 'src/app/Model/data-type';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-inventory-suppliers',
  templateUrl: './inventory-suppliers.component.html',
  styleUrls: ['./inventory-suppliers.component.css']
})
export class InventorySuppliersComponent implements OnInit {

  AllSuppliers: any;

  addSupplier! : FormGroup;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.addSupplier = new FormGroup({
      suplierName: new FormControl('', Validators.required),
      suplierAddress: new FormControl('', Validators.required),
      suplierContact: new FormControl('', Validators.required),
    });

    this.Suppliers();
  }

  ////////////////////////////// Adding Supplier to DB //////////////////////////////////////
  supplierModel = new Supplier("","", 0);
  onSubmitSupplier() {
    if (this.addSupplier.valid) {
      console.log(this.supplierModel);

      this.api.addSupplier(this.supplierModel).subscribe({
        next: (res) => {
          console.log('Success!', res);
          this.Suppliers();
        },
        error: (err) => {
          console.log('Error!', err);
        },
      });
    } else {
      validateForm.validateAllFormFields(this.addSupplier);
    } 
  }


////////////////////////////// Getting Supplier from DB //////////////////////////////////////
  Suppliers() {
    // department get
    this.api.getDepartment().subscribe({
      next: (res) => {
        this.AllSuppliers = res;
      },
    });
  }


  removeItem(i:any){
    let index = this.AllSuppliers.findIndex((item) => {
      return item.id === i.id;
    });
    this.AllSuppliers.splice(index, 1);
  }

}
