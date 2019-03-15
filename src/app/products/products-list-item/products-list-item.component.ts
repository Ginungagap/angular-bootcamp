import { Component, OnInit, Input } from '@angular/core';

import { ProductItemModel } from '../models/productItem.model';
import {ProductsService} from '../sevices/products.service';

@Component({
  selector: 'boot-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss']
})
export class ProductsListItemComponent implements OnInit {

  @Input() product: ProductItemModel;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }
  deleteItem(ev): void {
    ev.stopPropagation();
    this.productsService.deleteProduct(this.product.id);
}
}
