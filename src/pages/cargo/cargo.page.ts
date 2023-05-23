import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CargoProvider } from 'src/providers/CargoProvider';
import { CargoModel } from 'src/models/CargoModel';

@Component({
  selector: 'page-cargo',
  templateUrl: './cargo.page.html',
  styleUrls: ['./cargo.page.scss'],
})
export class CargoPage implements OnInit {
  formCadastro: FormGroup;
  isCadastroEdicao: boolean = false;
  dadosTabela: CargoModel[] = [];
  colunas = [
    {
      title: 'Descricao',
      compare: (a: CargoModel, b: CargoModel) =>
        a.descricao.localeCompare(b.descricao),
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private cargoProvider: CargoProvider
  ) {
    this.formCadastro = this.formBuilder.group({
      descricao: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.cargoProvider
      .listarCargos()
      .then((response) => {
        this.dadosTabela = response;
      })
      .catch((error) => {
        console.log('erro');
      });
  }

  acaoSubmit() {
    console.log(this.formCadastro.value);
    if (!this.formCadastro.invalid) {
      let cadastro = this.formCadastro.value;
      this.cargoProvider
        .criarCargo(cadastro)
        .then((response) => {
          this.ngOnInit();
          this.formCadastro.reset();
          this.isCadastroEdicao = false;
        })
        .catch((error) => {
          console.log('erro');
        });
    }else{
      alert("Preencha os campos corretamente");
    }
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

  goExcluir(pId: Number | null) {
    console.log('EXCLUIR PAPAI O ID ->' + pId);
  }
}
