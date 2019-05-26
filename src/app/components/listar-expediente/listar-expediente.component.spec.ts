import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarExpedienteComponent } from './listar-expediente.component';

describe('ListarExpedienteComponent', () => {
  let component: ListarExpedienteComponent;
  let fixture: ComponentFixture<ListarExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
