//Criando a tabela de usuarios

const Sequelize = require('sequelize');
const db = require('d:/Curso Desenvolvedor/Projetos/ProjetoIntegradorDh/DHBEER/model/db');

const User = db.define('usuarios', {
   id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
   } ,
   nome: {
    type: Sequelize.STRING,
    allowNull: false
   },
   endereco: {
    type: Sequelize.STRING,
    allowNull: false
   },
   bairro: {
    type: Sequelize.STRING,
    allowNull: false
   },
   cep: {
    type: Sequelize.INTEGER,
    allowNull: false
   },
   cidade: {
    type: Sequelize.STRING,
    allowNull: false
   },
   estado: {
    type: Sequelize.STRING,
    allowNull: false
   },
   email: {
    type: Sequelize.STRING,
    allowNull: false
   }
   
});

//User.sync();

module.exports = User;