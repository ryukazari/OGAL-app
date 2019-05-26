import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarExpedienteComponent } from './buscar-expediente.component';

describe('BuscarExpedienteComponent', () => {
  let component: BuscarExpedienteComponent;
  let fixture: ComponentFixture<BuscarExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
