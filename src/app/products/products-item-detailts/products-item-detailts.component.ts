import { Component, OnInit } from '@angular/core';

import { ActivatedRoute} from '@angular/router';
import { ProductItemModel } from '../models/productItem.model';
import {ProductsService} from '../sevices/products.service';

@Component({
  selector: 'boot-products-item-detailts',
  templateUrl: './products-item-detailts.component.html',
  styleUrls: ['./products-item-detailts.component.scss']
})
export class ProductsItemDetailtsComponent implements OnInit {

  product: ProductItemModel;

  isEditMode: boolean;

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.data.subscribe(res =>  {
       this.product = res.detailsData;
    });
   }

  // deleteItem(ev): void {
  //   ev.stopPropagation();
  //   this.productsService.deleteProduct(this.product.id);
  // }

  editModeOn() {

    this.isEditMode = true;
  }

  editModeOff() {
    this.isEditMode = false;
  }


}
