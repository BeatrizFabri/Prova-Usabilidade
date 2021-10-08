import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.css'],
})
export class AppComponent {
  title = 'Calculadora-Binarios';
  userForm = new FormGroup({
  numero: new FormControl(''),
  });

  calcular(numero: any) {
    console.log("Calculando");
  }
}
