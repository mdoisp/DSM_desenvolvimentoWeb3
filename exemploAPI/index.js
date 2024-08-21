const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let nomes = [];

app.get('/', (req, res) => {
  res.json(nomes)
})

app.post('/', (req, res) => {
    let nome = req.body.nome
    nomes.push(nome)
    res.send(`Nome: ${req.body.nome}`)
})

app.post('/exercicio', (req, res) => {
    let newTemp = Convert(req.body.type, req.body.temperature)
    res.send(newTemp)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})