let cadastros = [];

class Cadastro {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }

    static criarCadastro(nome, email) {
        const novoCadastro = new Cadastro(nome, email);
        cadastros.push(novoCadastro);
    }

    static listarCadastros() {
        return cadastros;
    }

    static excluirCadastro(email) {
        cadastros = cadastros.filter(cadastro => cadastro.email !== email);
    }

    static contarCadastros() {
        return cadastros.length;
    }
}

module.exports = Cadastro;
