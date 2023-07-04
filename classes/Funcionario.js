import {gerarId} from '../utils.js';

export class Funcionario {
    #usuario;
    #senha;
  
    constructor(nome,usuario, senha) {
      this.id = gerarId();
      this.nome=nome;
      this.#usuario = usuario;
      this.#senha = senha;
    }

    get senha(){
      return this.#senha;
    }

    get usuario(){
      return this.#usuario;
    }

    set usuario(novoUsuario){
      this.#usuario=novoUsuario;
    }

    set senha(novaSenha){
      this.#senha=novaSenha;
    }

  }