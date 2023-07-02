const prompt = require("prompt-sync")({ sigint: true });

function menuNaoLogado() {
    let opcao = prompt("Escolha uma opção:\n1. Fazer Login 1\n2. Fazer Cadastro.\n3. Sair do Programa.\nDigite Aqui: ");
  
    switch (opcao) {
      case "1":
        console.log("Você escolheu a opção 1");
        break;
      case "2":
        console.log("Você escolheu a opção 2");
        break;
      case "3":
        console.log("Você saiu do programa ");
        break;
    
      default:
        console.log("Opção inválida");
    }
  }


menuNaoLogado();






//-------Classes------//

class Cliente {
  constructor(id, nome, pets, fidelizado) {
    this.id = id;
    this.nome = nome;
    this.pets = pets;
    this.fidelizado = fidelizado;
  }
}

class Funcionario {
  constructor(id, username, senha) {
    this.id = id;
    this.username = username;
    this.senha = senha;
  }
}

class Animal {
  constructor(id, nomePet, nomeDono, consultasRealizadas) {
    this.id = id;
    this.nomePet = nomePet;
    this.nomeDono = nomeDono;
    this.consultasRealizadas = consultasRealizadas;
  }
}

class Consulta {
  constructor(id, nomeCliente, nomePet, funcionarioAgendou, status, data) {
    this.id = id;
    this.nomeCliente = nomeCliente;
    this.nomePet = nomePet;
    this.funcionarioAgendou = funcionarioAgendou;
    this.status = status;
    this.data = data;
  }
}

class Sistema {
  constructor() {
    this.clientes = [];
    this.funcionarios = [];
    this.animais = [];
    this.consultas = [];
  }

  // Implemente as funcionalidades exigidas pelo cliente aqui
}



//--------------------------------