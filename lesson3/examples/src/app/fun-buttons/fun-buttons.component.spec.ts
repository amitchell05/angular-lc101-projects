import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunButtonsComponent } from './fun-buttons.component';

describe('FunButtonsComponent', () => {
  let component: FunButtonsComponent;
  let fixture: ComponentFixture<FunButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
