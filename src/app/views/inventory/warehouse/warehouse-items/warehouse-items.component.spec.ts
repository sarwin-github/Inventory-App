import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseItemsComponent } from './warehouse-items.component';

describe('WarehouseItemsComponent', () => {
  let component: WarehouseItemsComponent;
  let fixture: ComponentFixture<WarehouseItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
