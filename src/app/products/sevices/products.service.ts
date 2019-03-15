import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {ProductItemModel} from '../models/productItem.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private  firestore: AngularFirestore) { }

  getProducts(): Observable<ProductItemModel[]> {
    return this.firestore.collection<ProductItemModel[]>('products').snapshotChanges()
      .pipe(map((products) => {
        return products.map (e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          };
        }) as any [];
      }));
  }

  deleteProduct(id: string): Promise<void> {
    return this.firestore.doc('products/' + id).delete();
  }

  getProduct(id: string): Observable<ProductItemModel> {
    return this.firestore.doc<ProductItemModel>('products/' + id).get().pipe(
      map(e => {
            return {
              id: e.id,
              ...e.data()
            } as ProductItemModel;
          }));
  }

  updateProduct(product: ProductItemModel): Promise<void> {
    return this.firestore.doc('products/$(product.id)').update(product);
  }

  createProduct(product: ProductItemModel): Promise<any> {
    return this.firestore.collection('products').add(product);
  }
}
