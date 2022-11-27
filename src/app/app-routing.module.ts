import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ApprovalDetailsComponent } from './newMetroCity/approval-details/approval-details.component';
import { ApprovalComponent } from './newMetroCity/approval/approval.component';
import { FuelSystemComponent } from './newMetroCity/common-layout/fuel-system/fuel-system.component';
import { DashboardComponent } from './newMetroCity/dashboard/dashboard.component';
import { InventoryHistoryComponent } from './newMetroCity/inventory-history/inventory-history.component';
import { InventoryNewPurchaseComponent } from './newMetroCity/inventory-new-purchase/inventory-new-purchase.component';
import { InventoryStoreTransferComponent } from './newMetroCity/inventory-store-transfer/inventory-store-transfer.component';
import { InventoryStoresComponent } from './newMetroCity/inventory-stores/inventory-stores.component';
import { InventorySuppliersComponent } from './newMetroCity/inventory-suppliers/inventory-suppliers.component';
import { InventoryComponent } from './newMetroCity/inventory/inventory.component';
import { IssuanceComponent } from './newMetroCity/issuance/issuance.component';
import { ReportsComponent } from './newMetroCity/reports/reports.component';
import { SettingsAddUserComponent } from './newMetroCity/settings-add-user/settings-add-user.component';
import { SettingsModuleAccessComponent } from './newMetroCity/settings-module-access/settings-module-access.component';
import { SettingsPrinterComponent } from './newMetroCity/settings-printer/settings-printer.component';
import { SettingsPrintingAccessComponent } from './newMetroCity/settings-printing-access/settings-printing-access.component';
import { SettingsPrivacyComponent } from './newMetroCity/settings-privacy/settings-privacy.component';
import { SettingsUniversalSettingComponent } from './newMetroCity/settings-universal-setting/settings-universal-setting.component';
import { SettingsUserSettingComponent } from './newMetroCity/settings-user-setting/settings-user-setting.component';
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
    {path: 'inventory', component: InventoryComponent, outlet:'metroCity'},
    {path: 'vehicle', component: VehicleComponent, outlet:'metroCity'},
    {path: 'reports', component: ReportsComponent, outlet:'metroCity'},
    {path: 'settings', component: SettingsComponent, outlet:'metroCity'},
    {path: 'approval-details', component: ApprovalDetailsComponent, outlet:'metroCity'},
    {path: 'settings-add-user', component: SettingsAddUserComponent, outlet:'metroCity'},
    {path: 'user-setting', component: SettingsUserSettingComponent, outlet:'metroCity'},
    {path: 'settings-module-access', component: SettingsModuleAccessComponent, outlet:'metroCity'},
    {path: 'settings-privacy', component: SettingsPrivacyComponent, outlet:'metroCity'},
    {path: 'universal-setting', component: SettingsUniversalSettingComponent, outlet:'metroCity'},
    {path: 'settings-printer', component: SettingsPrinterComponent, outlet:'metroCity'},
    {path: 'settings-printing-access', component: SettingsPrintingAccessComponent, outlet:'metroCity'},
    {path: 'inventory-new-purchase', component: InventoryNewPurchaseComponent, outlet:'metroCity'},
    {path: 'inventory-history', component: InventoryHistoryComponent, outlet:'metroCity'},
    {path: 'inventory-store-transfer', component: InventoryStoreTransferComponent, outlet:'metroCity'},
    {path: 'inventory-stores', component: InventoryStoresComponent, outlet:'metroCity'},
    {path: 'inventory-suppliers', component: InventorySuppliersComponent, outlet:'metroCity'},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
