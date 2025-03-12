class Cliente{
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome
        this.#cpf = cpf
        this.endereco = endereco
        this.telefones = new Set()
    }
    get pegarCpf(){
        return this.#cpf
    }
    get nomeUpper() {
        return this.nome.toUpperCase();
    }
    get nomeLower() {
        return this.nome.toLowerCase();
    }
    get pegarEnderecoCliente(){
        return `${this.endereco.estado}, ${this.endereco.cidade}, ${this.endereco.rua}, ${this.endereco.numero}`
    }
    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }
    descricaoCliente() {
        const telefonesList = [...this.telefones];
        const numero1 = telefonesList[0] ? `${telefonesList[0].ddd}-${telefonesList[0].numero}` : 'não informado';
        const numero2 = telefonesList[1] ? `${telefonesList[1].ddd}-${telefonesList[1].numero}` : 'não informado';
        return `nome: ${this.nome}\nEndereco: ${this.pegarEnderecoCliente}\nnumero 1: ${numero1}\nnumero 2: ${numero2}\n`;
    }
}
class Telefone{
    constructor(ddd, numero){
        this.ddd = ddd
        this. numero = numero
    }
}
class Endereco{
    constructor(estado, cidade, rua, numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }
}
class Empresa{
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.endereco = endereco
        this.clientes = new Set()
        this.telefones = new Set()
    }
    get pegarCnpj(){
        return this.#cnpj
    }
    get pegarRazaoSocialUpper() {
        return this.razaoSocial.toUpperCase();
    }
    get pegarRazaoSocialLower() {
        return this.razaoSocial.toLowerCase();
    }
    get pegarNomeFantasiaUpper() {
        return this.nomeFantasia.toUpperCase();
    }
    get pegarNomeFantasiaLower() {
        return this.nomeFantasia.toLowerCase();
    }
    get pegarEnderecoEmpresa(){
        return `${this.endereco.estado}, ${this.endereco.cidade}, ${this.endereco.rua}, ${this.endereco.numero}`
    }
    adicionarCliente(cliente) {
        this.clientes.add(cliente);
    }
    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }
    get detalhe(){
        let descricaoClientes = ''
        this.clientes.forEach(cliente => {
            descricaoClientes += cliente.descricaoCliente() + '\n'
        });
        let telefoneList = [...this.telefones]

        return `Empresa: ${this.nomeFantasia} - Razão Social: ${this.razaoSocial} - CNPJ: ${this.pegarCnpj} 
        \nEndereço: ${this.pegarEnderecoEmpresa} 
        \nTelefones: ${`${telefoneList[0].ddd}-${telefoneList[0].numero}`} ${`${telefoneList[1].ddd}-${telefoneList[1].numero}`} 
        \n-----------------------------------------------------\nClientes:
        \n${descricaoClientes}`;
    }
}
export default {Cliente, Telefone, Endereco, Empresa}