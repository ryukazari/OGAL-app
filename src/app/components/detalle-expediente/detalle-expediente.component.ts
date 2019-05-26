import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detalle-expediente',
  templateUrl: './detalle-expediente.component.html',
  styleUrls: ['./detalle-expediente.component.css']
})
export class DetalleExpedienteComponent implements OnInit {
  estadoComponente1: boolean = true;
  estadoComponente2: boolean = true;
  estadoComponente3: boolean = true;
  numero: String;
  displayedColumns: string[] = ['parte','tipopersona','apellidoP','apellidoM','nombre'];
  displayedColumns2: string[] = ['seguimiento'];
  expediente: Object[] = [{
      "parte":"DEMANDANTE",
      "tipopersona":"NATURAL",
      "apellidoP":"LOPEZ",
      "apellidoM":"NOLORBE",
      "nombre":"JUAN LUIS"
    },
    {
      "parte":"DEMANDADO",
      "tipopersona":"NATURAL",
      "apellidoP":"UNIVERSIDAD",
      "apellidoM":"NACIONAL",
      "nombre":"MAYOR DE SAN MARCOS"
    }
  ]

  seguimiento = [{
      "fecha":"25-01-2019",
      "acto":"DECRETO",
      "resolucion":"TREINTA Y CINCO",
      "folios":"1",
      "tiponotificacion":"Pta. Cédula Not.",
      "proveido":"25-01-2019",
      "sumilla":"LOREM IPSUM ALDSHA AKJDSPAIUS OHQOWHASLKF AOSKDHOATHALSKD ASDHALSDHASLDK ASD ASDIAOHW OUASHJABFK AISUHU",
      "descripcionusuario":"DESCARGADO POR VELA ARIMUYA TANIA LISSETE",
      "notificacion":{
        "numero":"2019-00044-15-JR-LA",
        "destinatario":"LOPEZ NOLORBE JUAN LUIS",
        "anexo":"RES N° 35 TENGA POR DEDUCIDA LA NULIDAD...",
        "fechaenvio":"01-03-2019"
      }
    },
    {
      "fecha":"26-01-2019",
      "acto":"DECRETO",
      "resolucion":"TREINTA Y CINCO",
      "folios":"1",
      "tiponotificacion":"Pta. Cédula Not.",
      "proveido":"26-01-2019",
      "sumilla":"LOREM IPSUM ALDSHA AKJDSPAIUS OHQOWHASLKF AOSKDHOATHALSKD ASDHALSDHASLDK ASD ASDIAOHW OUASHJABFK AISUHU",
      "descripcionusuario":"DESCARGADO POR VELA ARIMUYA TANIA LISSETE",
      "notificacion":{
        "numero":"2019-00044-15-JR-LA",
        "destinatario":"LOPEZ NOLORBE JUAN LUIS",
        "anexo":"RES N° 35 TENGA POR DEDUCIDA LA NULIDAD...",
        "fechaenvio":"01-03-2019"
      }
    },
    {
      "fecha":"27-01-2019",
      "acto":"DECRETO",
      "resolucion":"TREINTA Y CINCO",
      "folios":"1",
      "tiponotificacion":"Pta. Cédula Not.",
      "proveido":"25-01-2019",
      "sumilla":"LOREM IPSUM ALDSHA AKJDSPAIUS OHQOWHASLKF AOSKDHOATHALSKD ASDHALSDHASLDK ASD ASDIAOHW OUASHJABFK AISUHU",
      "descripcionusuario":"DESCARGADO POR VELA ARIMUYA TANIA LISSETE",
      "notificacion":{
        "numero":"2019-00044-15-JR-LA",
        "destinatario":"LOPEZ NOLORBE JUAN LUIS",
        "anexo":"RES N° 35 TENGA POR DEDUCIDA LA NULIDAD...",
        "fechaenvio":"01-03-2019"
      }
    },
    {
      "fecha":"27-01-2019",
      "acto":"DECRETO",
      "resolucion":"TREINTA Y CINCO",
      "folios":"1",
      "tiponotificacion":"Pta. Cédula Not.",
      "proveido":"25-01-2019",
      "sumilla":"LOREM IPSUM ALDSHA AKJDSPAIUS OHQOWHASLKF AOSKDHOATHALSKD ASDHALSDHASLDK ASD ASDIAOHW OUASHJABFK AISUHU",
      "descripcionusuario":"DESCARGADO POR VELA ARIMUYA TANIA LISSETE",
      "notificacion":{
        "numero":"2019-00044-15-JR-LA",
        "destinatario":"LOPEZ NOLORBE JUAN LUIS",
        "anexo":"RES N° 35 TENGA POR DEDUCIDA LA NULIDAD...",
        "fechaenvio":"01-03-2019"
      }
    },
    {
      "fecha":"28-01-2019",
      "acto":"DECRETO",
      "resolucion":"TREINTA Y CINCO",
      "folios":"1",
      "tiponotificacion":"Pta. Cédula Not.",
      "proveido":"28-01-2019",
      "sumilla":"LOREM IPSUM ALDSHA AKJDSPAIUS OHQOWHASLKF AOSKDHOATHALSKD ASDHALSDHASLDK ASD ASDIAOHW OUASHJABFK AISUHU",
      "descripcionusuario":"DESCARGADO POR VELA ARIMUYA TANIA LISSETE",
      "notificacion":{
        "numero":"2019-00044-15-JR-LA",
        "destinatario":"LOPEZ NOLORBE JUAN LUIS",
        "anexo":"RES N° 35 TENGA POR DEDUCIDA LA NULIDAD...",
        "fechaenvio":"01-03-2019"
      }
    },
    {
      "fecha":"29-01-2019",
      "acto":"DECRETO",
      "resolucion":"TREINTA Y CINCO",
      "folios":"1",
      "tiponotificacion":"Pta. Cédula Not.",
      "proveido":"29-01-2019",
      "sumilla":"LOREM IPSUM ALDSHA AKJDSPAIUS OHQOWHASLKF AOSKDHOATHALSKD ASDHALSDHASLDK ASD ASDIAOHW OUASHJABFK AISUHU",
      "descripcionusuario":"DESCARGADO POR VELA ARIMUYA TANIA LISSETE",
      "notificacion":{
        "numero":"2019-00044-15-JF-MN",
        "destinatario":"PATRICIA MARTINEZ",
        "anexo":"RES N° 35 TENGA POR DEDUCIDA LA NULIDAD...",
        "fechaenvio":"01-03-2019"
      }
    },
    {
      "fecha":"25-01-2019",
      "acto":"DECRETO",
      "resolucion":"TREINTA Y CINCO",
      "folios":"1",
      "tiponotificacion":"Pta. Cédula Not.",
      "proveido":"25-01-2019",
      "sumilla":"LOREM IPSUM ALDSHA AKJDSPAIUS OHQOWHASLKF AOSKDHOATHALSKD ASDHALSDHASLDK ASD ASDIAOHW OUASHJABFK AISUHU",
      "descripcionusuario":"DESCARGADO POR VELA ARIMUYA TANIA LISSETE",
      "notificacion":{
        "numero":"2019-00044-15-JR-LA",
        "destinatario":"LOPEZ NOLORBE JUAN LUIS",
        "anexo":"RES N° 35 TENGA POR DEDUCIDA LA NULIDAD...",
        "fechaenvio":"01-03-2019"
      }
    }
  ]
  dataSource = new MatTableDataSource<Object>(this.expediente);
  dataSource2 = new MatTableDataSource<Object>(this.seguimiento);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private _route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.dataSource2.paginator = this.paginator;
    this._route.params.subscribe(params=>{
      this.numero = params.numero;
    }); 
  }

  cambiarMensaje(numero: number){
    if(numero==1){
      if(this.estadoComponente1)this.estadoComponente1 = false;
      else this.estadoComponente1=true;
      console.log(this.estadoComponente1);
    }else if(numero==2){
      if(this.estadoComponente2)this.estadoComponente2 = false;
      else this.estadoComponente2=true;
      console.log(this.estadoComponente2);
    }else{
      if(this.estadoComponente3)this.estadoComponente3 = false;
      else this.estadoComponente3=true;
      console.log(this.estadoComponente3);
    }
  }

}
