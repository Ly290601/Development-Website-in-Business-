import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOtherComponent } from './product-other.component';

describe('ProductOtherComponent', () => {
  let component: ProductOtherComponent;
  let fixture: ComponentFixture<ProductOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
