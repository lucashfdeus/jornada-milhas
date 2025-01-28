import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { MensagemService } from '../services/mensagem.service';

@Injectable()
export class ErrosInterceptor implements HttpInterceptor {

  constructor(private mensagemService: MensagemService) { }

  intercept(
    request: HttpRequest<HttpErrorResponse>,
    next: HttpHandler): Observable<HttpEvent<HttpErrorResponse>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        let erroMessage = 'Ocorreu um erro desconhecido!';

        if (error.error instanceof ErrorEvent) {
          erroMessage = `Erro do cliente: ${error.error.message}`;
        } else {
          switch (error.status) {
            case 404:
              erroMessage = 'Recurso não encontrado!';
              break;
            case 500:
              erroMessage = 'Ocorreu um erro interno do servidor backEnd!';
              break;
            case 401:
              erroMessage = 'Você não tem autorização para acessar esse recurso!';
              break;
            default:
              erroMessage = 'Ocorreu um erro desconhecido!';
          }
        }

        this.mensagemService.openSnackBar(erroMessage);

        return throwError(() => new Error('Ops! Ocorreu um erro!'));
      })
    );
  }
}
