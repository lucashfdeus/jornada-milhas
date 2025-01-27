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
import { TreeComponent } from './pages/tree/tree.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { ErroModule } from './core/erro/erro.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    HomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ErroModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AutenticacaoInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
