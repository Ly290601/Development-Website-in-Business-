import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInteriorComponent } from './product-interior.component';

describe('ProductInteriorComponent', () => {
  let component: ProductInteriorComponent;
  let fixture: ComponentFixture<ProductInteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInteriorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
