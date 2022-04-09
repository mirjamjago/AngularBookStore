import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorBookInfoComponent } from './vendor-book-info.component';

describe('VendorBookInfoComponent', () => {
  let component: VendorBookInfoComponent;
  let fixture: ComponentFixture<VendorBookInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorBookInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorBookInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
