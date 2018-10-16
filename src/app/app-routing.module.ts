import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IoservicesComponent } from './ioservices/ioservices.component';

const appRoutes: Routes = [
  {path: "services", component:IoservicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }