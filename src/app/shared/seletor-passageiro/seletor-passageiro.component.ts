/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeletorPassageiroComponent),
      multi: true
    }
  ]
})
export class SeletorPassageiroComponent implements ControlValueAccessor {
  @Input() titulo = '';
  @Input() subtitulo = '';

  value = 0;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onchange = (value: number) => { };

  onTouch = () => { };


  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onchange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implementar a lógica para desabilitar o controle
    if (isDisabled) {
      // Código para desabilitar o controle
    } else {
      // Código para habilitar o controle
    }
  }

  incrementar() {
    this.value += 1;
    this.onchange(this.value);
    this.onTouch();
  }

  decrementar() {
    if (this.value > 0) {
      this.value -= 1;
      this.onchange(this.value);
      this.onTouch();
    }
  }
}
