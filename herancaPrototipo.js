const user = {
    nome: 'Andressa',
    email: 'and.turchetto@gmail.com',
    nascimento: '1994-12-25',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    },
};

const admin = {
    nome: 'Mariana',
    email: 'm@gmail.com',
    nascimento: '1994-12-25',
    role: 'estudante',
    ativo: true,
    criarCurso: function() {
        console.log('Curso criado');
    }
};

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()
