import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCarpetComponent } from './product-carpet.component';

describe('ProductCarpetComponent', () => {
  let component: ProductCarpetComponent;
  let fixture: ComponentFixture<ProductCarpetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCarpetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCarpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
