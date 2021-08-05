const database = require('./db')
const Orcamento = database.sequelize.define('orcamento', {
        peca: {
            type: database.Sequelize.STRING
        },
        compra: {
            type: database.Sequelize.FLOAT
        },
        quantidade: {
            type: database.Sequelize.INTEGER
        },
        lucro: {
            type: database.Sequelize.FLOAT
        },
        maodeobra: {
            type: database.Sequelize.FLOAT
        },
        servicos: {
            type: database.Sequelize.STRING
        }
    })
    // Orcamento.sync({ Force: true })
const Clientes = database.sequelize.define('clientes', {
        nome: {
            type: database.Sequelize.STRING
        },
        email: {
            type: database.Sequelize.STRING
        },
        cpf: {
            type: database.Sequelize.INTEGER
        },
        telefone: {
            type: database.Sequelize.INTEGER
        },
        nascimento: {
            type: database.Sequelize.DATEONLY
        },
        sexo: {
            type: database.Sequelize.STRING
        },
        endereco: {
            type: database.Sequelize.STRING
        },
        cidade: {
            type: database.Sequelize.STRING
        },
        estado: {
            type: database.Sequelize.STRING
        },
        cep: {
            type: database.Sequelize.INTEGER
        },
        senha: {
            type: database.Sequelize.STRING
        },
        confirmar: {
            type: database.Sequelize.STRING
        }
    })
    // Clientes.sync({ Force: true })
module.exports = {
    Orcamento: Orcamento,
    Clientes: Clientes
}