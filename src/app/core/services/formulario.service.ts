import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  cadastroForm: FormGroup | null = null

  // constructor(private formBuilder: FormBuilder, private formularioService: FormularioService
  // ) { }

  constructor() { }


  getCadastro(): FormGroup | null {
    return this.cadastroForm
  }

  setCadastro(form: FormGroup) {
    this.cadastroForm = form
  }
}
