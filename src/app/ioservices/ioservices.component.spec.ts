import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoservicesComponent } from './ioservices.component';

describe('IoservicesComponent', () => {
  let component: IoservicesComponent;
  let fixture: ComponentFixture<IoservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
