import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IobannerComponent } from './iobanner.component';

describe('IobannerComponent', () => {
  let component: IobannerComponent;
  let fixture: ComponentFixture<IobannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IobannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IobannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
