import {gerarId} from '../utils.js';

export class Consulta {//data tem que estar no formato "AAAA-MM-DD"
    constructor(nomeCliente, nomePet, funcionarioAgendou, data) {
      this.id = gerarId();
      this.nomeCliente = nomeCliente;
      this.nomePet = nomePet;
      this.funcionarioAgendou = funcionarioAgendou;
      this.status = "Pendente";
      this.data = data;
    }

    remarcarConsulta(dataEscolhida){ 
      const verificarData = () => {
        const data1 = new Date(this.data);
        const data2 = new Date(dataEscolhida);
        if (data2 > data1) {
          this.status="Adiado";
        }
      this.data=dataEscolhida;
    }

    verificarData()

  }

  realizarConsulta(){
    this.status="Realizada";
  }

  cancelarConsulta(){
    this.status="Cancelada";
  }


}