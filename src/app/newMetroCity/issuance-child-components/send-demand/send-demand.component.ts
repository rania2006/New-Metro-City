import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { fr } from 'date-fns/locale';
import { debounceTime } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-send-demand',
  templateUrl: './send-demand.component.html',
  styleUrls: ['./send-demand.component.css']
})
export class SendDemandComponent implements OnInit {
  formGroup: FormGroup
  constructor(private api: ApiService, private fb: FormBuilder) { }
  allVehicleArray = [];
  allVehicleNumber = [];
  filteredOptions;
  selectedVehicle;
  selectedVehicleDetail=[];
  demandfuel:number;
  remaining:number;
  sendPendingRequest=[]
  // DemandVAlidation="^[0-9]{3,4}$"

  ngOnInit(): void {
    console.log("Send Demand Status")
    this.getVehicleDetails()
    this.initForm();
  }
  months = ['January', 'February', 'March', 'April', 'May', 'June']
  initForm() {
    this.formGroup = this.fb.group({
      'vehicleNumber': ['']
    })
    // .pipe(debounceTime(1000))
    this.formGroup.get('vehicleNumber').valueChanges
      .subscribe(response => {
        // console.log("data is",response)
        if (response && response.length) {
          this.filterData(response)

        } else {
          this.filteredOptions = [];
        }

      })
  }
  filterData(enterData) {
    this.filteredOptions = this.allVehicleNumber.filter(item => {
      return item.toLowerCase().indexOf(enterData.toLowerCase()) > -1
    })
  }

  getVehicleDetails() {
    // this.food.getMenuNames().subscribe({
    //   next: (res) => {

    //     let Category;
    //     Category = res;
    //     for (let i = 0; i < Category.length; i++) {
    //       let subCategories;
    //       subCategories = Category[i].categoryDAOs;
    //       for (let n = 0; n < subCategories.length; n++) {
    //         let products;
    //         products = subCategories[n].menuDAOs;
    //         for (let k = 0; k < products.length; k++) {
    //           let menus;
    //           menus = products[k]
    //           // console.log("all menus in orders", menus)
    //           this.menuNameArray.push(menus.menuName);
    //           this.menuArray.push(menus)

    //         }
    //       }
    //       break;
    //     }
    //     console.log(this.menuNameArray);
    //     console.log("whole menu array", this.menuArray)
    //   },
    //   error: (err) => {
    //     console.log(err.message)

    //   }
    // }
    // )
    this.api.getVehicle().subscribe({
      next: (res) => {
        let vehicleDetail;
        vehicleDetail = res;
        for (let k = 0; k < vehicleDetail.length; k++) {
          let vArray;
          vArray = vehicleDetail[k];
          console.log(vArray.vehicleNumber)
          this.allVehicleArray.push(vArray)
          this.allVehicleNumber.push(vArray.vehicleNumber)
          // this.filteredOptions.push(vArray.vehicleNumber)
        }
        console.log("all vehicle Array", this.allVehicleArray)
        console.log("all vehicle Number", this.allVehicleNumber)
        // console.log("Filterd Optins",this.filteredOptions)
      }
    })
  }
  handleKeyUpforMenuCode(event) {
    // console.log(e)
    if (event.key === 'Enter' || event.keyCode === 13) {
      document.getElementById('2').focus()

    }
  }

  // this will get search deropdown value means VEHICLE NUMBER/////////////////////////////
  handlekeyuponDropdown(matDropdown) {

    this.selectedVehicle = matDropdown
  }

  // this will get demand value
  sndRequest(demand) {
    console.log(demand)
    this.demandfuel=demand
    console.log(this.selectedVehicle)
    this.selectedVehicleDetail=[]
    for (let i = 0; i < this.allVehicleArray.length; i++) {
      // console.log(this.allVehicleArray[i])
      if (this.allVehicleArray[i].vehicleNumber == this.selectedVehicle) {
        console.log(this.allVehicleArray[i])
        // this.selectedVehicleDetail=this.allVehicleArray[i]   
        this.selectedVehicleDetail.push(this.allVehicleArray[i])
        this.sendPendingRequest.push({
          vehicleNumber:this.allVehicleArray[i].vehicleNumber,
          driverName:this.allVehicleArray[i].driverId,
          departmentName:this.allVehicleArray[i].departmentId,
          demand:this.demandfuel
        })
        console.log("arrayyyyyyyyyyyyyyy",this.sendPendingRequest)
        // localStorage.setItem(JSON.stringify('this.sendPendingRequest'))
        this.remaining=(this.allVehicleArray[i].allowedFuel)-(this.demandfuel)
        console.log(this.remaining,"number")
        console.log(this.selectedVehicleDetail,"nscgseuieyfawetydri")
        this.api.sendRequest( this.sendPendingRequest)
      }
    }
  }
}
