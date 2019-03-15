import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductsComponent} from './products.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductsItemDetailtsComponent} from './products-item-detailts/products-item-detailts.component';
import {ProductDetailsResolver} from './resolvers/product-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [{
      path: ':categoryId',
      component: ProductsListComponent
    },
      {
        path: ':categoryId/:productId',
        component: ProductsItemDetailtsComponent,
        resolve: {
          detailsData: ProductDetailsResolver
        },
      },
      {
        path: '',
        redirectTo: 'all'
      },
    ],
  }
];

@NgModule({
  declarations: [],
  providers: [ProductDetailsResolver],
  imports: [RouterModule.forChild(routes)],

})
export class ProductsRoutingModule { }
