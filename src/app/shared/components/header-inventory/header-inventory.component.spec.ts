import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInventoryComponent } from './header-inventory.component';

describe('HeaderInventoryComponent', () => {
  let component: HeaderInventoryComponent;
  let fixture: ComponentFixture<HeaderInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
