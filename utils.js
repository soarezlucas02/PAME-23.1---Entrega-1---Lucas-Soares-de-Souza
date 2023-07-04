


const idsGerados = [];
export function gerarId() {
  const comprimento = 4;

  let id;
  let idExiste = true;

  while (idExiste) {
    id = "";
    for (let i = 0; i < comprimento; i++) {
      const digito = Math.floor(Math.random() * 10);
      id += digito;
    }

    idExiste = idsGerados.includes(id);
  }

  idsGerados.push(id);

  return id;
}

export function listarEmOrdemAlfabetica(array) {
  // Ordena a array em ordem alfabética com base na propriedade 'nome'
  const lista = array.sort((a, b) => {
    // Converte os nomes para maiúsculas para garantir a ordem correta
    const nomeA = a.nome.toUpperCase();
    const nomeB = b.nome.toUpperCase();

    if (nomeA < nomeB) {
      return -1; // 'a' vem antes de 'b' no alfabeto
    }
    if (nomeA > nomeB) {
      return 1; // 'a' vem depois de 'b' no alfabeto
    }
    return 0; // 'a' e 'b' têm o mesmo nome
  });

  lista.forEach((objeto) => {
    console.log(`Nome: ${objeto.nome} | ID: ${objeto.id}`);
  });
}

export function listarEmOrdemAlfabeticaPet(array) {
  // Ordena a array em ordem alfabética com base na propriedade 'nome'
  const lista = array.sort((a, b) => {
    // Converte os nomes para maiúsculas para garantir a ordem correta
    const nomeA = a.nome.toUpperCase();
    const nomeB = b.nome.toUpperCase();

    if (nomeA < nomeB) {
      return -1; // 'a' vem antes de 'b' no alfabeto
    }
    if (nomeA > nomeB) {
      return 1; // 'a' vem depois de 'b' no alfabeto
    }
    return 0; // 'a' e 'b' têm o mesmo nome
  });

  lista.forEach((objeto) => {
    console.log(`Nome: ${objeto.nome} | ID: ${objeto.id} | Nome do Dono: ${objeto.nomeDono}`);
  });
}


export function listarEmOrdemCronologica(array) {
  const lista = array.sort((a, b) => {
    const dataA = new Date(a.data);
    const dataB = new Date(b.data);

    if (dataA < dataB) {
      return -1; // 'a' vem antes de 'b' na ordem cronológica
    }
    if (dataA > dataB) {
      return 1; // 'a' vem depois de 'b' na ordem cronológica
    }
    return 0; // 'a' e 'b' têm a mesma data
  });

  lista.forEach((objeto) => {
    console.log(objeto.data);
  });
}
