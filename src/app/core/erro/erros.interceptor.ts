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

  intercept(request: HttpRequest<HttpErrorResponse>, next: HttpHandler): Observable<HttpEvent<HttpErrorResponse>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const { message, status } = this.getErrorDetails(error);
        this.mensagemService.openSnackBar(message);
        return throwError(() => new Error(`Erro ${status}: ${message}`));
      })
    );
  }

  private getErrorDetails(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      return this.handleClientError(error.error.message);
    }
    return this.handleHttpError(error.status);
  }

  private handleClientError(message: string) {
    return message.includes('ERR_CONNECTION_REFUSED')
      ? { status: 503, message: 'O servidor está fora do ar!' }
      : { status: 0, message: `Erro do cliente: ${message}` };
  }

  private handleHttpError(status: number) {
    switch (status) {
      case 404:
        return { status, message: 'Recurso não encontrado!' };
      case 500:
        return { status, message: 'Ocorreu um erro interno do servidor backEnd!' };
      case 401:
        return { status, message: 'Você não tem autorização para acessar esse recurso!' };
      case 503:
        return { status, message: 'O servidor está fora do ar!' };
      default:
        return { status, message: 'Ocorreu um erro desconhecido!' };
    }
  }
}
