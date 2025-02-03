const express = require("express");
const path = require('path');
// rotas
const routerInicio = require("./routes/inicioRoute");
const routerAdmin = require("./routes/adminRoute");

const expressEjsLayout = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());


app.set("view engine", "ejs");
app.set("layout", "./layout");

app.use(express.static(path.join(__dirname, 'public')));
app.use(expressEjsLayout);

app.use("/", routerInicio);
app.use('/admin', routerAdmin);

app.listen(5000, function() {
    console.log("servidor iniciado");
})