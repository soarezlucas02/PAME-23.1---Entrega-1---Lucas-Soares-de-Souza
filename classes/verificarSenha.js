class Credenciais {
    constructor(usuario, senha) {
      this.usuario = usuario;
      let _senha = senha; // Atributo privado
  
      this.verificarSenha = (senha) => {
        return senha === _senha;
      };
    }
  }
  
  class SistemaDeLogin {
    constructor() {
      this.usuarios = [
        new Credenciais('usuario1', 'senha1'),
        new Credenciais('usuario2', 'senha2'),
        new Credenciais('usuario3', 'senha3')
      ];
    }
  
    verificarCredenciais(usuario, senha) {
      const credenciaisEncontradas = this.usuarios.find(
        (credenciais) => credenciais.usuario === usuario
      );
  
      if (!credenciaisEncontradas) {
        return 'Usuário não encontrado';
      }
  
      if (credenciaisEncontradas.verificarSenha(senha)) {
        return 'Credenciais válidas. Acesso permitido.';
      } else {
        return 'Senha incorreta';
      }
    }
  }

  const sistemaDeLogin = new SistemaDeLogin();
  
  console.log(sistema.verificarCredenciais('usuario1', 'senha1'));
  console.log(sistema.verificarCredenciais('usuario2', 'senha3')); 
  console.log(sistema.verificarCredenciais('usuario4', 'senha4')); 
  