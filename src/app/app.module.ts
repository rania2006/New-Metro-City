import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './newMetroCity/common-layout/header/header.component';
import { SidebarComponent } from './newMetroCity/common-layout/sidebar/sidebar.component';
import { FuelSystemComponent } from './newMetroCity/common-layout/fuel-system/fuel-system.component';
import { DashboardComponent } from './newMetroCity/dashboard/dashboard.component';
import { IssuanceComponent } from './newMetroCity/issuance/issuance.component';
import { ApprovalComponent } from './newMetroCity/approval/approval.component';
import { InventoryComponent } from './newMetroCity/inventory/inventory.component';
import { VehicleComponent } from './newMetroCity/vehicle/vehicle.component';
import { ReportsComponent } from './newMetroCity/reports/reports.component';
import { SettingsComponent } from './newMetroCity/settings/settings.component';
import { ApprovalDetailsComponent } from './newMetroCity/approval-details/approval-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FuelSystemComponent,
    DashboardComponent,
    IssuanceComponent,
    ApprovalComponent,
    InventoryComponent,
    VehicleComponent,
    ReportsComponent,
    SettingsComponent,
    ApprovalDetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
