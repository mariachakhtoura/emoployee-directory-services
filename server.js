const express = require('express')
const cors = require('cors')
const { createHandler } = require('graphql-http/lib/use/express')
const expressPlayground =
require('graphql-playground-middleware-express').default
const schema = require('./schema')

const app = express()

app.use(cors())
app.all('/graphql', createHandler({ schema }))
app.get('/', (req, res) => {
  res.send('Go to /playground to check the GrahQL Schema')
})
app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

app.listen(8080)
