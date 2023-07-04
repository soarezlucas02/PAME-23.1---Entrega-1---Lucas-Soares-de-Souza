import {gerarId} from '../utils.js';

export class Animal {
    constructor(nome, nomeDono) {
      this.id = gerarId();
      this.nome = nome;
      this.nomeDono = nomeDono;
      this.consultasRealizadas = 0;
    }

    adicionarConsulta(){
      this.consultasRealizadas++;
    }

  }