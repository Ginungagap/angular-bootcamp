import { Component, OnInit } from '@angular/core';

import { ActivatedRoute} from '@angular/router';
import { ProductItemModel } from '../models/productItem.model';
import {ProductsService} from '../sevices/products.service';
import {AddNewProductComponent} from '../add-new-product/add-new-product.component';
import {MatDialog} from '@angular/material';
import {AuthService} from '../../auth/services/auth.service';

@Component({
  selector: 'boot-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: ProductItemModel[];
  searhQuery: string;
  isAdmin: boolean;

  constructor( private productsService: ProductsService,
               private activatedRoute: ActivatedRoute,
               private dialog: MatDialog,
               private authService: AuthService) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    this.activatedRoute.params.subscribe(res =>  {
      this.productsService.getProducts().subscribe((products: ProductItemModel[]) => {
        this.products = res.categoryId === 'all' ? products : products.filter(p =>
          p.category.toLowerCase() === res.categoryId);
      });
    });
  }

  openAddNew(): void {
    const dialogRef = this.dialog.open(AddNewProductComponent, {
      width: '450px',
      data: {
        name: null,
        description: null,
        price: null,
        category: null,
        imgUrl: null,
        isHidden: null,
      },
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.productsService.createProduct(res);
      }
    });
  }

}
