const express = require('express')
const Author = require('./db/schema.js')
const app = express()
const port = 4000
const parser = require('body-parser')

app.use(parser.json())

app.get('/authors/:_id', (req, res) => {
  res.send(200, 'author fired')
  Author.findOne({ _id: req.params.id }).then((author) => {
    res.json(author)
  })
})

app.get('/authors', (req, res) => {
  res.send(200, 'author fired')
  Author.find({}).then((authors) => {
    res.json(authors)
  })
})

app.delete('/authors/:id', (req, res) => {
  res.send(200, 'author fired')
  Author.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.send(200, 'author fired')
  })
})

app.put('/authors/:id', (req, res) => {
  res.send(200, 'author fired')
  Author.findOneAndUpdate({ _id: req.params.id }.req.body).then((author) => {
    res.json(author)
  })
})

app.post('/authors', (req, res) => {
  res.send(200, 'author fired')
  Author.create(req.body).then((author) => {
    res.status(200).json(author)
  })
})

app.get('/findAuthorByName/:name', (req, res) => {
  var author = Author.find({name: req.params.name})
  res.send(author)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = app
