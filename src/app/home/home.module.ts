import { NgModule } from "@angular/core";
import { PromocoesComponent } from "./promocoes/promocoes.component";
import { DepoimentosComponent } from "./depoimentos/depoimentos.component";
import { HomeComponent } from "./home.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/core/material/material.module";

@NgModule({
  declarations: [
    PromocoesComponent,
    DepoimentosComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    PromocoesComponent,
    DepoimentosComponent,
    HomeComponent
  ]
})
export class HomeModule { }
