import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AutenticacaoInterceptor } from './autenticacao/autenticacao.interceptor';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './core/material/material.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { HomeModule } from './home/home.module';
import { BuscaModule } from './busca/busca.module';
import { TreeComponent } from './pages/tree/tree.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    HomeModule,
    AutenticacaoModule,
    BuscaModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AutenticacaoInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
