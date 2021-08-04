const http = require('express');
const app = http();
const route = require('./public/scripts/route')
const path = require('path');
app.set('view engine', 'ejs');
app.use(http.static("public"));
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => res.render('index'))
app.use(http.urlencoded({ extended: false }))
app.use(http.json())
app.use(route)
app.listen(8081, () => console.log("Rodando!"));