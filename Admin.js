import User from "./User.js"

class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = "true") {
        super(nome, email, nascimento, role, ativo)
    }
}

const novoAdmin = new Admin("Luiz", "luiz@gmail.com", "1987-08-04")
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
