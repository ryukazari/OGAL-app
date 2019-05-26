import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-expediente',
  templateUrl: './buscar-expediente.component.html',
  styleUrls: ['./buscar-expediente.component.css']
})
export class BuscarExpedienteComponent implements OnInit {

  distritos_judiciales: String[] = [
    'distrito1','distrito2','distrito3','distrito3','distrito4','distrito5','distrito6'
  ];
  anios: String[] = [
    '2012','2013','2014','2015','2016','2017','2018','2019'
  ];

  constructor() { }

  ngOnInit() {
  }

}
