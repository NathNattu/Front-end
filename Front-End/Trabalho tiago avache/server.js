const express = require('express');
const express = require('./routes');
const app = express();
app.use(express.json());
app.use('/api', rotas);
const port = process.env.PORT || 3000;


app.get('/', (req,res) =>{
    res.send('Hello World');
});

app.get('/consulta-cep/:cep', async (req,res) =>{
    const cep = req.params.cep;

    try{
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        res.json(response.data);
    }catch(error){
        console.error('erro ao fazer requisição:', error);
        res.status(500).send('Erro ao consultar o CEP');
    }
});

app.listen(port,()=>{
    app.listen(PORT, ()=>console.log(`Servidor rodando na porta ${PORT}`));
});