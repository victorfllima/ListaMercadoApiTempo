import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  cadastro(){
    this.router.navigate(['home']);
  }
  login(){
    this.router.navigate(['login']);
  }
}
