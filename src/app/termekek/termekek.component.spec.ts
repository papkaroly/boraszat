import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermekekComponent } from './termekek.component';

describe('TermekekComponent', () => {
  let component: TermekekComponent;
  let fixture: ComponentFixture<TermekekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermekekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermekekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
