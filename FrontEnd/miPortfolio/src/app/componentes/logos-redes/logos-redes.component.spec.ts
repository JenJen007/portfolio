import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosRedesComponent } from './logos-redes.component';

describe('LogosRedesComponent', () => {
  let component: LogosRedesComponent;
  let fixture: ComponentFixture<LogosRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogosRedesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
