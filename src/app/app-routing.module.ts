import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    component: OrderComponent,
    pathMatch: 'full'
  },
  {
    path: 'view-details',
    component: OrderDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
