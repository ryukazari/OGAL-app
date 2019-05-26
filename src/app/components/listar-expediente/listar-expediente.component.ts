import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-listar-expediente',
  templateUrl: './listar-expediente.component.html',
  styleUrls: ['./listar-expediente.component.css']
})
export class ListarExpedienteComponent implements OnInit {
  procedimientos: string[] = [
    'Opcion1', 'Opcion2', 'Opcion3'
  ];
  estados: string[] = [
    'Estado1', 'Estado2', 'Estado3'
  ];

  

  displayedColumns: string[] = ['expediente'];

  dataSource = new MatTableDataSource<PeriodicElement>(expedientes);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

function mostrarDetalle(expediente: Object){
  console.log(expediente);
}

export interface PeriodicElement {
  numero:String;
  parte_procesal:String;
  demandante:String;
  demandado:String;
  materia:String;
  estado:String;
}

const expedientes: PeriodicElement[] = [
  {
      "numero":"00819-2009-0-1903-JR-CI-01",
      "parte_procesal":"JUZGADO DE TRABAJO TRANSITORIO DE MAYNAS",
      "demandante":"LOPEZ NOLORBE, JUAN LUIS",
      "demandado":"UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS",
      "materia":"ACCION CONTENCIOSA ADMINISTRATIVA",
      "estado":"ESTADO"
  },
  {
      "numero":"00819-2009-0-1903-JR-CI-02",
      "parte_procesal":"JUZGADO DE TRABAJO TRANSITORIO DE MAYNAS",
      "demandante":"LOPEZ NOLORBE, JUAN LUIS",
      "demandado":"UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS",
      "materia":"ACCION CONTENCIOSA ADMINISTRATIVA",
      "estado":"INICIADO"
  },
  {
      "numero":"00819-2009-0-1903-JR-CI-03",
      "parte_procesal":"JUZGADO DE TRABAJO TRANSITORIO DE MAYNAS",
      "demandante":"LOPEZ NOLORBE, JUAN LUIS",
      "demandado":"UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS",
      "materia":"ACCION CONTENCIOSA ADMINISTRATIVA",
      "estado":"FINALIZADO"
  },
  {
      "numero":"00819-2009-0-1903-JR-CI-04",
      "parte_procesal":"JUZGADO DE TRABAJO TRANSITORIO DE MAYNAS",
      "demandante":"LOPEZ NOLORBE, JUAN LUIS",
      "demandado":"UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS",
      "materia":"ACCION CONTENCIOSA ADMINISTRATIVA",
      "estado":"INICIADO"
  },
  {
      "numero":"00819-2009-0-1903-JR-CI-05",
      "parte_procesal":"JUZGADO DE TRABAJO TRANSITORIO DE MAYNAS",
      "demandante":"CHUPETIN TRUJILLO",
      "demandado":"UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS",
      "materia":"ACCION CONTENCIOSA ADMINISTRATIVA",
      "estado":"INICIADO"
  },
  {
      "numero":"00819-2009-0-1903-JR-CI-06",
      "parte_procesal":"JUZGADO DE TRABAJO TRANSITORIO DE MAYNAS",
      "demandante":"ORESTES CACHAY",
      "demandado":"UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS",
      "materia":"ACCION CONTENCIOSA ADMINISTRATIVA",
      "estado":"PROCESADO"
  },
  {
      "numero":"00819-2009-0-1903-JR-CI-07",
      "parte_procesal":"JUZGADO DE TRABAJO TRANSITORIO DE MAYNAS",
      "demandante":"LOPEZ NOLORBE, JUAN LUIS",
      "demandado":"UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS",
      "materia":"ACCION CONTENCIOSA ADMINISTRATIVA",
      "estado":"INICIADO"
  },
  {
      "numero":"00819-2009-0-1903-JR-CI-08",
      "parte_procesal":"JUZGADO DE TRABAJO TRANSITORIO DE MAYNAS",
      "demandante":"LOPEZ NOLORBE, JUAN LUIS",
      "demandado":"UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS",
      "materia":"ACCION CONTENCIOSA ADMINISTRATIVA",
      "estado":"INICIADO"
  },
  {
      "numero":"00819-2009-0-1903-JR-CI-09",
      "parte_procesal":"JUZGADO DE TRABAJO TRANSITORIO DE MAYNAS",
      "demandante":"LOPEZ NOLORBE, JUAN LUIS",
      "demandado":"UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS",
      "materia":"ACCION CONTENCIOSA ADMINISTRATIVA",
      "estado":"FINALIZADO"
  },
  {
      "numero":"00819-2009-0-1903-JR-CI-10",
      "parte_procesal":"JUZGADO DE TRABAJO TRANSITORIO DE MAYNAS",
      "demandante":"LOPEZ NOLORBE, JUAN LUIS",
      "demandado":"UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS",
      "materia":"ACCION CONTENCIOSA ADMINISTRATIVA",
      "estado":"FINALIZADO"
  },
  {
      "numero":"00819-2009-0-1903-JR-CI-11",
      "parte_procesal":"JUZGADO DE TRABAJO TRANSITORIO DE MAYNAS",
      "demandante":"LOPEZ NOLORBE, JUAN LUIS",
      "demandado":"UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS",
      "materia":"ACCION CONTENCIOSA ADMINISTRATIVA",
      "estado":"INICIADO"
  },
  {
      "numero":"00819-2009-0-1903-JR-CI-12",
      "parte_procesal":"JUZGADO DE TRABAJO TRANSITORIO DE MAYNAS",
      "demandante":"LOPEZ NOLORBE, JUAN LUIS",
      "demandado":"UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS",
      "materia":"ACCION CONTENCIOSA ADMINISTRATIVA",
      "estado":"PROCESADO"
  },
  {
      "numero":"00819-2009-0-1903-JR-CI-13",
      "parte_procesal":"JUZGADO DE TRABAJO TRANSITORIO DE MAYNAS",
      "demandante":"LOPEZ NOLORBE, JUAN LUIS",
      "demandado":"UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS",
      "materia":"ACCION CONTENCIOSA ADMINISTRATIVA",
      "estado":"PROCESADO"
  },
  {
      "numero":"00819-2009-0-1903-JR-CI-14",
      "parte_procesal":"JUZGADO DE TRABAJO TRANSITORIO DE MAYNAS",
      "demandante":"LOPEZ NOLORBE, JUAN LUIS",
      "demandado":"UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS",
      "materia":"ACCION CONTENCIOSA ADMINISTRATIVA",
      "estado":"INICIADO"
  }
];