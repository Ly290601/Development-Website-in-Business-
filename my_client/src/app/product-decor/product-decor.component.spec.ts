import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDecorComponent } from './product-decor.component';

describe('ProductDecorComponent', () => {
  let component: ProductDecorComponent;
  let fixture: ComponentFixture<ProductDecorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDecorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
