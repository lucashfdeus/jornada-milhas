import { NgModule } from "@angular/core";
import { PromocoesComponent } from "./promocoes/promocoes.component";
import { DepoimentosComponent } from "./depoimentos/depoimentos.component";
import { HomeComponent } from "./home.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/core/material/material.module";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [
    DepoimentosComponent,
    HomeComponent,
    PromocoesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
    DepoimentosComponent,
    HomeComponent,
    PromocoesComponent
  ]
})
export class HomeModule { }
