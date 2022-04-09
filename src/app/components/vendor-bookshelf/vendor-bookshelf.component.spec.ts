import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorBookshelfComponent } from './vendor-bookshelf.component';

describe('VendorBookshelfComponent', () => {
  let component: VendorBookshelfComponent;
  let fixture: ComponentFixture<VendorBookshelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorBookshelfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorBookshelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
