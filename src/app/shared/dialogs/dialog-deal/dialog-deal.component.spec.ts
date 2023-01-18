import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDealComponent } from './dialog-deal.component';

describe('DialogDealComponent', () => {
  let component: DialogDealComponent;
  let fixture: ComponentFixture<DialogDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
