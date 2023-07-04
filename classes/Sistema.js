import { Cliente } from "./Cliente.js";
import { Animal } from "./Animal.js";
import { Consulta } from "./Consulta.js";
import { sistema } from "../index.js";
import { sistemaNaoLogado } from "../index.js";
import { encontrarObjetoPorId } from "../utils.js";

import { listarEmOrdemAlfabetica } from "../utils.js";
import { listarEmOrdemAlfabeticaPet } from "../utils.js";
import { listarEmOrdemCronologica } from "../utils.js";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const prompt = require("prompt-sync")();

// Classe Sistema Logado
export class Sistema {
  constructor() {
    this.clientes = [];
    this.pets = [];
    this.consultas = [];
  }

  adicionarCliente(cliente) {
    this.clientes.push(cliente);
  }

  adicionarPet(pet) {
    this.pets.push(pet);
  }

  agendarConsulta(consulta) {
    this.consultas.push(consulta);
  }

  verMeusDados() {
    const id = prompt("digite seu ID: ");
    const funcionario = encontrarObjetoPorId(id, sistemaNaoLogado.funcionarios);
    console.log("1- Ver usuario.");
    console.log("1- Ver senha.");
    let opcao = prompt(`Escolha uma opcao ${funcionario.nome}: `);
    switch (opcao) {
      case "1":
        console.log(funcionario.usuario);
        break;

      case "2":
        console.log(funcionario.senha);
        break;

      default:
        console.log("Opção inválida. Por favor, escolha uma opção válida.");
        break;
    }
    console.log("Visualizando meus dados...");
  }

  modificarMeusDados() {
    //modificar os dados do funcionário logado
    console.log("Modificando meus dados...");
  }

  listarClientes() {
    if (this.clientes.length === 0) {
      console.log("Nenhum cliente encontrado.");
    }
    listarEmOrdemAlfabetica(this.clientes);
  }

  verListaPets() {
    if (this.pets.length === 0) {
      console.log("Nenhum pet encontrado.");
    }
    listarEmOrdemAlfabeticaPet(this.pets);
  }

  verListaConsultas() {
    if (this.consultas.length === 0) {
      console.log("Nenhuma consulta encontrada.");
    }
    listarEmOrdemCronologica(this.consultas);
  }

  verListaFuncionarios() {
    if (sistemaNaoLogado.funcionarios.length === 0) {
      console.log("Nenhum funcionario encontrado.");
    }
    listarEmOrdemAlfabetica(sistemaNaoLogado.funcionarios);
  }

  cadastrarCliente() {
    const nome = prompt("Escolha o nome que deseja cadastrar: ");
    const cliente = new Cliente(nome);
    sistema.adicionarCliente(cliente);
    console.log(`Cliente ${cliente.nome} cadastrado com sucesso!`);
    console.log(`o ID do cliente é : ${cliente.id}`);
  }

  cadastrarPet() {
    const nome = prompt("Escolha o nome do Pet que deseja cadastrar: ");
    const nomeDono = prompt("Escolha o nome do Dono que deseja cadastrar: ");
    const pet = new Animal(nome, nomeDono);
    sistema.adicionarPet(pet);
    console.log(`Pet  cadastrado com sucesso!`);
    console.log(`o nome do Pet é : ${pet.nome}`);
    console.log(`o ID do Pet é : ${pet.id}`);
    console.log(`o nome do dono do Pet é : ${pet.nomeDono}`);
  }

  marcarConsulta() {
    const nomeCliente = prompt("Digite o nome do dono do pet: ");
    const nomePet = prompt("Digite o nome do Pet: ");
    const funcionarioAgendou = prompt("Digite o nome do funcionario: ");
    const data = prompt("Digite a data da consulta no formato AAAA-MM-DD: ");
    const consulta = new Consulta(
      nomeCliente,
      nomePet,
      funcionarioAgendou,
      data
    );
    sistema.agendarConsulta(consulta);
    console.log(`Consulta ${consulta.id} cadastrada com sucesso!`);
    console.log(`a data da consulta é: ${consulta.data}`);
  }

  mudarStatusConsulta() {
    //mudar o status de uma consulta
    console.log("Mudando status de consulta...");
  }

  removerCliente() {
    //remover um cliente
    console.log("Removendo cliente...");
  }

  removerPet() {
    //remover um pet
    console.log("Removendo pet...");
  }

  cancelarConsulta() {
    //cancelar uma consulta
    console.log("Cancelando consulta...");
  }

  removerFuncionario() {
    //remover um funcionário
    console.log("Removendo funcionário...");
  }

  fazerLogout() {
    //fazer logout
    this.funcionarioLogado = false;
    console.log("Fazendo logout...");
  }

  exibirMenu() {
    console.log("----------- Opcoes -----------");
    console.log("1. Ver meus dados");
    console.log("2. Modificar meus dados");
    console.log("3. ver lista de Clientes");
    console.log("4. Ver lista de Pets");
    console.log("5. Ver lista de Consultas");
    console.log("6. Ver lista de Funcionários");
    console.log("7. Cadastrar Cliente");
    console.log("8. Cadastrar Pet");
    console.log("9. Marcar Consulta");
    console.log("10. Mudar Status de Consulta");
    console.log("11. Remover Cliente");
    console.log("12. Remover Pet");
    console.log("13. Cancelar Consulta");
    console.log("14. Remover Funcionário");
    console.log("15. Fazer Logout");
    console.log("-----------------------------");
  }

  executar() {
    let opcao = "";

    while (opcao !== "15") {
      this.exibirMenu();
      opcao = prompt("Escolha uma opção:");

      switch (opcao) {
        case "1":
          sistema.verMeusDados();
          break;

        case "2":
          sistema.modificarMeusDados();
          break;

        case "3":
          sistema.listarClientes();
          break;

        case "4":
          sistema.verListaPets();
          break;

        case "5":
          sistema.verListaConsultas();
          break;

        case "6":
          sistema.verListaFuncionarios();
          break;

        case "7":
          sistema.cadastrarCliente();
          break;

        case "8":
          sistema.cadastrarPet();
          break;

        case "9":
          sistema.marcarConsulta();
          break;

        case "10":
          sistema.mudarStatusConsulta();
          break;

        case "11":
          sistema.removerCliente();
          break;

        case "12":
          sistema.removerPet();
          break;

        case "13":
          sistema.cancelarConsulta();
          break;

        case "14":
          sistema.removerFuncionario();
          break;

        case "15":
          console.log("Logout realizado com sucesso!");
          break;

        default:
          console.log("Opção inválida. Por favor, escolha uma opção válida.");
          break;
      }
    }
  }
}
