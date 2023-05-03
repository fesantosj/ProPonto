import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
    private isLogged: boolean = true;
    constructor(private router: Router) {}
  
    async canActivate(): Promise<boolean> {
      //Se ele está logado não permite rota interna de login/registro
      if (this.isLogged) {        
        return true;
      } else {        
        this.router.navigate(['/login']);
        return false;
      }
    }
  }
  