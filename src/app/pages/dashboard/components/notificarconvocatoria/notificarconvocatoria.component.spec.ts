import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificarconvocatoriaComponent } from './notificarconvocatoria.component';

describe('NotificarconvocatoriaComponent', () => {
  let component: NotificarconvocatoriaComponent;
  let fixture: ComponentFixture<NotificarconvocatoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificarconvocatoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificarconvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
