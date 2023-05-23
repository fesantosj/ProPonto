import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CargoProvider } from 'src/providers/CargoProvider';

interface Pessoa {
  id: number;
  nome: string;
  idade: number;
  email: string;
}

@Component({
  selector: 'page-cargo',
  templateUrl: './cargo.page.html',
  styleUrls: ['./cargo.page.scss'],
})
export class CargoPage implements OnInit {
  formCadastro: FormGroup;
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
  
  constructor(private formBuilder: FormBuilder, private cargoProvider: CargoProvider) {
    this.formCadastro = this.formBuilder.group({
      descricao: ['', [Validators.required]],     
    });
  }

  ngOnInit(): void {
    this.dadosTabela = new Array(15).fill(0).map((_, index) => ({
      id: 1 + index,
      nome: `Luiz ${index}`,
      idade: 1 + index,
      email: `Vila Rica ${index}`,
    }));
  }

  acaoSubmit() {
    console.log(this.formCadastro.value);

    let cadastro = this.formCadastro.value
    this.cargoProvider.criarCargo(cadastro).then((response) => {     
    }).catch((error) => {
      console.log("erro");
    });
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
    console.log('EXCLUIR PAPAI O ID ->' + pId);
  }
}
