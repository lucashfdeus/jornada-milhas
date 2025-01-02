import { NgModule } from "@angular/core";
import { BannerComponent } from "./banner/banner.component";
import { CardComponent } from "./card/card.component";
import { ContainerComponent } from "./container/container.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { CardBuscaComponent } from "./card-busca/card-busca.component";
import { FormBuscaComponent } from "./form-busca/form-busca.component";
import { CardDepoimentoComponent } from "./card-depoimento/card-depoimento.component";
import { TreeComponent } from "../pages/tree/tree.component";
import { BotaoControleComponent } from "./botao-controle/botao-controle.component";
import { DropdownUfComponent } from "./dropdown-uf/dropdown-uf.component";
import { FormBaseComponent } from "./form-base/form-base.component";
import { ModalComponent } from "./modal/modal.component";
import { PassagemDestaqueComponent } from "../busca/passagem-destaque/passagem-destaque.component";
import { PassagemComponent } from "../busca/passagem/passagem.component";
import { SeletorPassageiroComponent } from "./seletor-passageiro/seletor-passageiro.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../core/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CompanhiasComponent } from "../busca/filtros-complementares/companhias/companhias.component";
import { FiltrosComplementaresComponent } from "../busca/filtros-complementares/filtros-complementares.component";
import { LabelComponent } from "../busca/filtros-complementares/label/label.component";
import { ParadasComponent } from "../busca/filtros-complementares/paradas/paradas.component";
import { PrecosComponent } from "../busca/filtros-complementares/precos/precos.component";

@NgModule({
  declarations: [
    BannerComponent,
    CardComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    ContainerComponent,
    DropdownUfComponent,
    FooterComponent,
    FormBaseComponent,
    FormBuscaComponent,
    HeaderComponent,
    SeletorPassageiroComponent,
    ModalComponent,
    BotaoControleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule

  ],
  exports: [
    BannerComponent,
    CardComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    ContainerComponent,
    DropdownUfComponent,
    FooterComponent,
    FormBaseComponent,
    FormBuscaComponent,
    HeaderComponent,
    SeletorPassageiroComponent,
    ModalComponent,
    BotaoControleComponent
  ]
})
export class SharedModule { }
