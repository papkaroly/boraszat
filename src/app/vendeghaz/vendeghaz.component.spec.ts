import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeghazComponent } from './vendeghaz.component';

describe('VendeghazComponent', () => {
  let component: VendeghazComponent;
  let fixture: ComponentFixture<VendeghazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendeghazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendeghazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
