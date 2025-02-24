import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { DadosBusca, Destaques, Passagem, Resultado } from 'src/app/core/types/type';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PassagensService {

  apiUrl: string = environment.apiUrl;
  precoMin = 0;
  precoMax = 0;

  constructor(private httpClient: HttpClient) { }

  getPassagens(search: DadosBusca): Observable<Resultado> {

    const params = this.converterParametroParaString(search);

    const obs = this.httpClient.get<Resultado>(this.apiUrl + '/passagem/search?' + params);

    obs.pipe(take(1)).subscribe(res => {
      this.precoMin = res.precoMin;
      this.precoMax = res.precoMax;
    });

    return obs;
  }

  converterParametroParaString(busca: DadosBusca) {
    const query = Object.entries(busca)
      .map(([key, value]) => {
        if (!value) {
          return '';
        }
        return `${key}=${value}`;
      })
      .join('&');
    return query;
  }

  obterPassagensDestaques(passagem: Passagem[]): Destaques | undefined {
    if (!passagem.length) {
      return undefined;
    }

    const ordenadoPorTempo = [...passagem].sort(
      (a, b) => a.tempoVoo - b.tempoVoo
    );

    const ordernadoPorPreco = [...passagem].sort(
      (a, b) => a.total - b.total
    );

    const maisRapida = ordenadoPorTempo[0];
    const maisBarata = ordernadoPorPreco[0];

    const ordernadoPorMedia = [...passagem].sort((a, b) => {
      const pontuacaoA = (a.tempoVoo / maisBarata.tempoVoo + a.total / maisBarata.total) / 2;

      const pontuacaoB = (b.tempoVoo / maisBarata.total + b.total / maisBarata.total) / 2;

      return pontuacaoA - pontuacaoB;
    });

    const sugerida = ordernadoPorMedia[0];

    return { maisRapida, maisBarata, sugerida };
  }
}
