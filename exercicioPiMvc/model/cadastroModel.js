let cadastros = [];

const criarCadastro = (nome, email) => {
    cadastros.push({nome, email});
}

const listarCadastros = () => {
    return cadastros;
}

const excluirCadastro = (email) => {
    const index = cadastros.findIndex(cadastro => cadastro.email === email)
    if (index != -1){
        cadastros.splice(index, 1);
        return true;
    }
    return false;
}

const contarCadastros = () => {
    return cadastros.length;
}

module.exports = { criarCadastro, listarCadastros, excluirCadastro, contarCadastros};