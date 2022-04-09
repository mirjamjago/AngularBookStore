import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBookInfoComponent } from './customer-book-info.component';

describe('CustomerBookInfoComponent', () => {
  let component: CustomerBookInfoComponent;
  let fixture: ComponentFixture<CustomerBookInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBookInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBookInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
