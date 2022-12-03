export class Login{
    username:string;
    password:string;
}

export class Department {
    constructor(

        public departmentName: string,  
    ) {}
}

export class Supplier {
    constructor(
        public suplierName: string,
        public suplierAddress: string,
        public suplierContact: number,
    ) {}
    // fuelType: string;
    // totalQuantity: number;
    // contactNo: number;
    // cnic: number;
    // status: string;
}

export class Vehicles {
    constructor(
        public vehicleNumber:string,
        public vehicleMake:string,
        public vehicleModel:string,
        public allowedFuel:number,
        public fuelType:number,
        public driverId:string,
        public departmentId:string,
    ){}
}

export class Stores {
    constructor(
        
        public storeName:string,
        public inchargeName:string,
        public contactNumber:string,
        public stockCapacity:string,
        public storeAddress:string,
        
    ){}
}