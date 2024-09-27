import { Component } from '@angular/core';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  resultado = 0

  suma(n1: number, n2:number) {
    this.resultado = n1 + n2;
  }
  resta(n1: number, n2:number) {
    this.resultado = n1 - n2;
  }
  multiplicacion(n1: number, n2:number) {
    this.resultado = n1 * n2;
  }
  division(n1: number, n2:number) {
    this.resultado = n1 + n2;
  }
}
