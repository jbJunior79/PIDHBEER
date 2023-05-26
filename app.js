//Gerenciador de rotas

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const User = require('./model/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/' , (req,res) =>{
    res.sendFile( 'D:/Curso Desenvolvedor/Projetos/ProjetoIntegradorDh/DHBEER/public')
});

app.post('/salvar-dados' , (req,res) =>{
    User.create({
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cep:    req.body.cep,
        cidade: req.body.cidade,
        estado: req.body.estado,
        email: req.body.email

    }).then(function(){
        res.send("Compra Cadastrada com sucesso!")
    }).catch(function(){
        res.send("ERRO: compra nao cadastrada")
    })
});
app.listen(3000 , ()=>{
    console.log("servidor iniciado na porta 3000: http://localhost:3000");
})