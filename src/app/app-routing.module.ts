import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewOrderComponent } from '../app/pages/new-order/new-order.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { FiveAndDimeOptionsComponent } from './pages/five-and-dime-options/five-and-dime-options.component';
import { TenInchOptionsComponent } from './pages/ten-inch-options/ten-inch-options.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: NewOrderComponent
      },
      {
        path: 'five-and-dime',
        component: FiveAndDimeOptionsComponent
      },
      {
        path: 'ten-inch',
        component: TenInchOptionsComponent
      }
    ]
  }
];

