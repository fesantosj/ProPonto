import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestApiAxiosService {  

  constructor() { }
  
  postAllDados(local: string, params?: any, options?: any) {
    return instance.post(local, params, {headers: options});
  } 

  getAllDados(local: string, options: any) {
    return instance.get(local, options);
  }  
  
  putAllDados(local: string, params?: any, options?: any) {
    return instance.put(local, params, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', options } });
  }

}

export const instance = axios.create({
  baseURL: environment.apiUrl,
  timeout: 30000
});