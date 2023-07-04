import {gerarId} from '../utils.js';

export class Cliente {
    
    constructor(nome) {
      this.id = gerarId();
      this.nome = nome;
      this.pets = [];
      this.consultasTotais=0;
      this.fidelizado = false;
    }

    adicionarPet(pet){
      this.pets.push(pet);
    }

    adicionarConsulta(){
      this.consultasTotais++;
      if(this.consultasTotais>4){
        this.fidelizado=true;
      }
    }

  }