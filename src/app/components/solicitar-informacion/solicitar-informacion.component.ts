import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-solicitar-informacion',
  templateUrl: './solicitar-informacion.component.html',
  styleUrls: ['./solicitar-informacion.component.css']
})
export class SolicitarInformacionComponent implements OnInit {
  emailOrigen = 'asesorialegal@unmsm.edu.pe';
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  constructor() { }

  ngOnInit() {
  }

}
