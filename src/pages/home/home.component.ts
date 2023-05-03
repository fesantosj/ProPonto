import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface Pessoa {
  id: number;
  nome: string;
  idade: number;
  email: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  formLogin: FormGroup;
  isCadastroEdicao: boolean = false;

  dadosTabela: Pessoa[] = [];

  colunas = [
    {
      title: 'Nome',
      compare: (a: Pessoa, b: Pessoa) => a.nome.localeCompare(b.nome),
    },
    {
      title: 'Idade',
      compare: (a: Pessoa, b: Pessoa) => a.idade - b.idade,      
    },
    {
      title: 'Email',
      compare: (a: Pessoa, b: Pessoa) => a.email.localeCompare(b.email),      
    },    
  ];
  
  constructor(private formBuilder: FormBuilder) {
    this.formLogin = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
    
  }
  
  ngOnInit(): void {
    this.dadosTabela = new Array(15).fill(0).map((_, index) => ({
      id: 1 + index,
      nome: `Luiz ${index}`,
      idade: 1 + index,
      email: `Vila Rica ${index}`
    }));
  }  

  acaoSubmit() {
    console.log(this.formLogin.value);
    console.log('Logica submit');
  }

  acaoCancel() {
    this.isCadastroEdicao = false;
    console.log('Ir para tela listagem');
  }

  goCadastrar() {
    this.isCadastroEdicao = true;
  }

  goEditar() {
    this.isCadastroEdicao = true;
  }

  goExcluir(pId: Number) {
    console.log("EXCLUIR PAPAI O ID ->"+pId);
  }
}
