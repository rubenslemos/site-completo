const http = require('express');
const app = http();
const path = require('path');
app.set('view engine', 'ejs');
app.use(http.static("public"));
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => res.render('index'));
app.listen(8081, () => console.log("Rodando!"));