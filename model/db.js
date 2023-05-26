//Conexao com o banco de dados

const {Sequelize} = require('sequelize');
const sequelize = new Sequelize("dhbeer", "root", "",{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});




sequelize.authenticate()
.then(function(){
    console.log("conexao com o banco de dados realizada com sucesso");
}).catch(function(){
    console.log("Erro: conexao com o banco de dados nao realizada com sucesso")
})

module.exports = sequelize;