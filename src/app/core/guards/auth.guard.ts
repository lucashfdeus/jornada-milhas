// import { Router } from "@angular/router";
// import { UserService } from "../services/user.service";
// import { inject } from "@angular/core";

// export const authGuard = () => {
//   const userService = inject(UserService);
//   const router = inject(Router);

//   if (userService.estaLogado()) {
//     return true;
//   } else {
//     router.navigate(['/login']);
//     console.log('Usuário não está logado!');
//     return false;
//   }
// };


//Usando uma forma mais classica.

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private userService = inject(UserService);
  private router = inject(Router);

  canActivate(): boolean {
    if (this.userService.estaLogado()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      console.log('Usuário não está logado!');
      return false;
    }
  }
}
