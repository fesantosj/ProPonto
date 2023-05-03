import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private isLogged: boolean = false;
  isLogin: boolean = true;
  constructor(private router: Router) { }

  ngOnInit() {
    if(this.isLogged){
      this.router.navigate(['/home']);      
    }else{
      this.router.navigate(['/login']);
    }
  }

  goRegistrar(){
    this.isLogin = false;
  }

  goLogar(){
    this.isLogin = true;
  }

}
