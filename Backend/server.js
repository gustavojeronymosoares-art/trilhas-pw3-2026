const express = require("express");
const cors = require('cors');
const loginRoutes = require('./src/routes/loginRouths');

const app = express()
const PORT =  3000;
app.use(cors());
app.use('./api/login', loginRoutes);

app.listen(PORT, () => {
  console.log('Servidor rodando na porta ${PORT}');
});

