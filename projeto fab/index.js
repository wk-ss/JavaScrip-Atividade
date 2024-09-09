const { log } = require('console');
const express = require('express')
const { data } = require('./models/DUMMY')

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send(data);
});


app.get('/:id', (req, res) => {
    const { id } = req.params;
    const datas = data.find((value) => value.id === Number(id));
    if (!datas) return res.send('client not found');
    res.send(datas)
})

app.get('')
app.listen(8080, () => {
    console.log('ta rodando o serve');

})