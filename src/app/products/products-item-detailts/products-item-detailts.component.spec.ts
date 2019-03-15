import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsItemDetailtsComponent } from './products-item-detailts.component';

describe('ProductsItemDetailtsComponent', () => {
  let component: ProductsItemDetailtsComponent;
  let fixture: ComponentFixture<ProductsItemDetailtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsItemDetailtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsItemDetailtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
