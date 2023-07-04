


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
  
  const lista = array.sort((a, b) => {
    const nomeA = a.nome.toUpperCase();
    const nomeB = b.nome.toUpperCase();

    if (nomeA < nomeB) {
      return -1;
    }
    if (nomeA > nomeB) {
      return 1;
    }
    return 0;
  });

  lista.forEach((objeto) => {
    console.log(objeto)
  });
}

export function listarEmOrdemAlfabeticaPet(array) {

  const lista = array.sort((a, b) => {
    const nomeA = a.nome.toUpperCase();
    const nomeB = b.nome.toUpperCase();

    if (nomeA < nomeB) {
      return -1; 
    }
    if (nomeA > nomeB) {
      return 1; 
    }
    return 0;
  });

  lista.forEach((objeto) => {
    console.log(objeto)
  });
}


export function listarEmOrdemCronologica(array) {
  const lista = array.sort((a, b) => {
    const dataA = new Date(a.data);
    const dataB = new Date(b.data);

    if (dataA < dataB) {
      return -1;
    }
    if (dataA > dataB) {
      return 1;
    }
    return 0;
  });

  lista.forEach((objeto) => {
    console.log(objeto);
  });
}


export function encontrarObjetoPorId(id, array) {
  const objetoEncontrado = array.find((objeto) => objeto.id === id);
  if (objetoEncontrado) {
    return objetoEncontrado;
  } else {
    console.log("Objeto não encontrado");
    return null;
  }
}
