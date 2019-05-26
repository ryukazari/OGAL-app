import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarExpedienteComponent } from './registrar-expediente.component';

describe('RegistrarExpedienteComponent', () => {
  let component: RegistrarExpedienteComponent;
  let fixture: ComponentFixture<RegistrarExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
