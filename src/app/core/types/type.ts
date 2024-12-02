// Definindo a interface Person
export interface Person {
  id: number;
  name: string;
  relationship: string;
  children?: Person[];  // Pessoa pode ter filhos
}

// PersonNode extendido de Person com propriedades adicionais
export interface PersonNode extends Person {
  level: number; // Garantindo que 'level' seja um número
  children?: PersonNode[];
}


export interface Promocao {
  id: number
  destino: string
  imagem: string
  preco: number
}

export interface UnidadeFederativa {
  id: number;
  nome: string;
  sigla: string;
}

export interface Depoimento {
  id: number;
  texto: string;
  autor: string;
  avatar: string;
}

export interface PessoaUsuaria {
  nome: string;
  nascimento: string;
  cpf: string;
  telefone: string;
  email: string;
  senha: string;
  cidade: string;
  estado: UnidadeFederativa;
}
