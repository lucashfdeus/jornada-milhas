import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autenticacao/login/login.component';
import { CadastroComponent } from './autenticacao/cadastro/cadastro.component';
import { PerfilComponent } from './autenticacao/perfil/perfil.component';
import { TreeComponent } from './pages/tree/tree.component';
//import { authGuard } from './core/guards/auth.guard'; uso do guard como classe.
import { AuthGuard } from './autenticacao/auth.guard';
import { BuscaComponent } from './busca/busca.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'busca',
    component: BuscaComponent
  },
  {
    path: 'tree',
    component: TreeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
