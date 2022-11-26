import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ApprovalDetailsComponent } from './newMetroCity/approval-details/approval-details.component';
import { ApprovalComponent } from './newMetroCity/approval/approval.component';
import { FuelSystemComponent } from './newMetroCity/common-layout/fuel-system/fuel-system.component';
import { DashboardComponent } from './newMetroCity/dashboard/dashboard.component';
import { IssuanceComponent } from './newMetroCity/issuance/issuance.component';
import { ReportsComponent } from './newMetroCity/reports/reports.component';
import { SettingsComponent } from './newMetroCity/settings/settings.component';
import { VehicleComponent } from './newMetroCity/vehicle/vehicle.component';

const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path: 'login', component:LoginComponent
  },
  {path:'fuel',component:FuelSystemComponent,
  children:[
    {path: 'dashboard', component: DashboardComponent, outlet:'metroCity'},
    {path: 'issuance', component: IssuanceComponent, outlet:'metroCity'},
    {path: 'approval', component: ApprovalComponent, outlet:'metroCity'},
    {path: 'inventory', component: IssuanceComponent, outlet:'metroCity'},
    {path: 'vehicle', component: VehicleComponent, outlet:'metroCity'},
    {path: 'reports', component: ReportsComponent, outlet:'metroCity'},
    {path: 'settings', component: SettingsComponent, outlet:'metroCity'},
    {path: 'approval-details', component: ApprovalDetailsComponent, outlet:'metroCity'},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
