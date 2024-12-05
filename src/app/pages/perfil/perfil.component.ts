import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { TokenService } from 'src/app/core/services/token.service';
import { UserService } from 'src/app/core/services/user.service';
import { PessoaUsuaria } from 'src/app/core/types/type';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  titulo = 'Olá ';
  textoBotao = 'ATUALIZAR';
  perfilComponent = true;

  token = '';
  nome = '';
  cadastro!: PessoaUsuaria;
  form!: FormGroup | null;

  constructor(
    private tokenService: TokenService,
    private cadastroService: CadastroService,
    private formularioService: FormularioService,
    private router: Router,
    private userService: UserService) { }


  ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    this.cadastroService.buscarCadastro().subscribe(cadastro => {
      this.cadastro = cadastro;
      this.nome = this.cadastro.nome;

      this.carregarFormulario();
      console.log("Dados usuário API:", this.form?.value);
    });
  }

  carregarFormulario() {
    this.form = this.formularioService.getCadastro();
    this.form?.patchValue({
      nome: this.cadastro.nome,
      nascimento: this.cadastro.nascimento,
      cpf: this.cadastro.cpf,
      genero: this.cadastro.genero,
      telefone: this.cadastro.telefone,
      email: this.cadastro.email,
      senha: this.cadastro.senha,
      cidade: this.cadastro.cidade,
      estado: this.cadastro.estado
    });
  }

  atualizar() {
    const dadosPerfilAtualizados = {
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      cpf: this.form?.value.cpf,
      genero: this.form?.value.genero,
      telefone: this.form?.value.telefone,
      email: this.form?.value.email,
      senha: this.form?.value.senha,
      cidade: this.form?.value.cidade,
      estado: this.form?.value.estado
    };

    this.cadastroService.editarCadastro(dadosPerfilAtualizados).subscribe({
      next: () => {
        alert("Cadastro alterado com sucesso!");
        this.router.navigate(['/']);
      },
      error: (err) => {
        alert("Ops! erro ao alterar cadastro!");
        console.log("Erro ao atualizar cadastro!", err);
      }
    });
  }

  deslogar() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
