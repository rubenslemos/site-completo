const express = require('express')
const insert = require('./CreateTables')
const route = require('./route')
const deletepost = (req, res) => {
    insert.Postagem.destroy({
        where: { 'id': req.params.id }
    }).then(() =>
        res.redirect('/')
    ).catch((erro) =>
        res.send('Esta postagem não existe!')
    )
}
const deleteuser = (req, res) => {
    insert.Usuario.destroy({
        where: { 'id': req.params.id }
    }).then(() =>
        res.redirect('/')
    ).catch((erro) =>
        res.send('Esta postagem não existe!')
    )
}
module.exports = {
    deletepost: deletepost,
    deleteuser: deleteuser
}