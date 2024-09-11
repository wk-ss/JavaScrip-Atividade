const { log } = require('console');
const express = require('express')
const { client } = require('./models/DUMMY')

const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//     res.send(data);
// });
app.get('/', (req, res) => {
    res.send(client);
});


app.get('/cliente/:id', (req, res) => {
    const { id } = req.params;
    const clientes = client.find((value) => value.id === Number(id));
    if (!clientes) return res.send('client not found');
    res.send(clientes)
});

app.post('/cliente', (req, res) => {
    const { name } = req.body;
    const id = client.length + 1;
    client.push({ id, name });
    res.send('Client added')
});

app.put('/cliente/:id',(req,res) =>{
    const {id} = req.params;
    const {name} = req.body;
    const clientes = client.find((value) => value.id === Number(id));
    if (!clientes) return res.send('client not found');
    clientes.name=name;
    res.send("cliente updated")
});

app.delete('/cliente/:id',(req,res)=>{
    const {id} = req.params;
    const index = client.findIndex((value)=>value.id===Number(id));
    if (index === -1) return res.send("cliente not found");
    client.splice(index,1);
    res.send("client apagado");
});

app.listen(8080, () => {
    console.log('ta rodando o serve');

})