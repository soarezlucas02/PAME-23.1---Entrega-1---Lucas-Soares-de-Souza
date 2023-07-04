import { Sistema } from "./classes/Sistema.js";
import { SistemaNaoLogado } from "./classes/SistemaNaoLogado.js";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const prompt = require("prompt-sync")();



//-------------------Chamadas------------------//

export const sistema = new Sistema();
export const sistemaNaoLogado = new SistemaNaoLogado();
sistemaNaoLogado.executar();

//---------------------------------------------