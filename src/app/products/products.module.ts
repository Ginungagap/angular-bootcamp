import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsListItemComponent } from './products-list-item/products-list-item.component';
import { FilterPipe} from '../shared/pipes/filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule} from './products-routing.module';
import { RouterModule} from '@angular/router';
import { ProductsService} from './sevices/products.service';
import { AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatIconModule, MatDialogModule
} from '@angular/material';
import { ProductsItemDetailtsComponent } from './products-item-detailts/products-item-detailts.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';


@NgModule({
    declarations: [ProductsListComponent, ProductsListItemComponent, FilterPipe, ProductsComponent, ProductsItemDetailtsComponent, ProductsItemDetailtsComponent, ProductFormComponent, AddNewProductComponent],
    entryComponents: [
    AddNewProductComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatInputModule,
    ProductsRoutingModule,
    RouterModule,
    AngularFirestoreModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [ProductsListComponent],
  providers: [ProductsService,
    { provide: FirestoreSettingsToken, useValue: {} }
  ]
})
export class ProductsModule { }

