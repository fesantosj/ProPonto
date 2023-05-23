import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: 'template.component.html',
  styleUrls: ['template.component.scss'],
})
export class LayoutComponent {
  isCollapsed = false;
  tituloPagina: string = 'HOME';
  menuCadastro = [
    { path: 'home', title: 'Home' },
    { path: 'login', title: 'Login' },
    { path: 'cargo', title: 'Cargo' },
    { path: 'register', title: 'Register' },
  ];

  constructor() {}

  setarTituloPagina(pTitulo: string){
    this.tituloPagina = pTitulo.toUpperCase();
  }
}
