import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/autenticacao/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private userService: UserService,
    private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  user$ = this.userService.retornarUser();
  logout() {
    this.userService.logout();
    this.router.navigate(['auth/login']);
  }

  navegarParaCadastro() {
    this.router.navigate(['auth/cadastro']);
  }

  navegarParaLogin() {
    this.router.navigate(['auth/login']);
  }
}
