import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PessoaUsuaria } from '../types/type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  cadastrar(pessoaUsuaria: PessoaUsuaria): Observable<PessoaUsuaria> {
    return this.http.post<PessoaUsuaria>(`${this.apiUrl}/auth/cadastro`, pessoaUsuaria);
  }

  buscarCadastro(): Observable<PessoaUsuaria> {

    //Usando o intercept do angular.
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${token}`
    // })

    return this.http.get<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`);
  }

  editarCadastro(pessoaUsuaria: PessoaUsuaria): Observable<PessoaUsuaria> {

    //Usando o intercept do angular.
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${token}`
    // })

    return this.http.patch<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`, pessoaUsuaria);
  }
}
