import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RestApiAxiosService } from 'src/services/rest-api-axios.service';

@Injectable({ providedIn: 'root' })
export class CargoProvider {
  private routes = {
    criarCargo: () => {
      return environment.apiUrl + 'api/cargo/criarCargo';
    },
    listarCargos: () => {
      return environment.apiUrl + 'api/cargo/listarCargos';
    },
  };

  constructor(private restAxios: RestApiAxiosService) {}

  private async optionsPadrao(pToken: string | any) {
    var httpOptions = {
      'Content-Type': 'application/json',
     // Authorization: `Bearer ` + pToken,
    };
    return httpOptions;
  }

  private tratamentoErro(error: any): Observable<any> {
    return throwError(error);
  }

  public async criarCargo(pCargo: any): Promise<any> {
    let httpOptions = await this.optionsPadrao('');
    return this.restAxios
      .postAllDados(this.routes.criarCargo(), pCargo, httpOptions)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return this.tratamentoErro(error.response.data).toPromise();
      });
  }

  public async listarCargos() {    
    let httpOptions = await this.optionsPadrao('');
    return  this.restAxios.getAllDados(this.routes.listarCargos(), {httpOptions}).then((response) => {
      return response.data;
    }).catch((error) => {
      return this.tratamentoErro(error.response.data).toPromise();      
    });
  }


}
