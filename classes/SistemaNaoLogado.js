import { Funcionario } from "./Funcionario.js";
import { sistema } from "../index.js";
import { sistemaNaoLogado } from "../index.js";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const prompt = require("prompt-sync")();

//Sistema nao logado

export class SistemaNaoLogado {
  constructor() {
    this.funcionarios = [];
  }

  fazerLogin() {}

  cadastrarFuncionario() {
    const nome = prompt("Escolha o nome que deseja cadastrar: ");
    const usuario = prompt("Escolha o usuario que deseja cadastrar: ");
    const senha = prompt("Escolha a senha que deseja cadastrar: ");
    const funcionario = new Funcionario(nome, usuario, senha);
    sistemaNaoLogado.adicionarFuncionario(funcionario);
    console.log(`Seu ID é: ${funcionario.id}`)
  }

  adicionarFuncionario(funcionario) {
    this.funcionarios.push(funcionario);
  }

  exibirMenu() {
    console.log("---------- Opcoes ----------");
    console.log("1. Fazer Login");
    console.log("2. Cadastrar Funcionario");
    console.log("3. Sair do Programa");
    console.log("--------------------------");
  }

  executar() {
    let opcao;

    while (opcao !== "3") {
      this.exibirMenu();
      opcao = prompt("Escolha uma opção:");

      switch (opcao) {
        case "1":
          console.log("Realizando Login...");
          sistema.executar();
          break;

        case "2":
          sistemaNaoLogado.cadastrarFuncionario();
          console.log("Cadastro realizado com sucesso!");
          break;
        case "3":
          console.log("Programa Encerrado.");
          break;

        default:
          console.log("Opção inválida. Por favor, escolha uma opção válida.");
          break;
      }
    }
  }
}
