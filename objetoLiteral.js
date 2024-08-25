const user = {
    nome: 'Andressa',
    email: 'and.turchetto@gmail.com',
    nascimento: '1994-12-25',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
};

// user.exibirInfos()

// const exibir = user.exibirInfos
// exibir()

const exibir = function() {
    console.log(this.nome, this.email);
}

const exibirNome = exibir.bind(user);
exibirNome()

