const jsonServer = require('json-server')
const path = require('path')
const app = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()


app.use(middlewares)

// Add custom routes before JSON Server router
app.get('/app-test', (req, res, next) => {
  console.log(process.env.PASSWORD);
  console.log('NEWWW');
  let data = [
    { name: 'Alexandre' },
    { name: 'Pooya' },
    { name: 'Sébastien' },
    { password: process.env.PASSWORD}
  ]
  res.json(data)
})

app.use(jsonServer.bodyParser)

app.use((req, res, next) => {
  next();
})

app.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  next()  // Continue to JSON Server router
})

app.use(router)


module.exports = {
  path: '/api',
  handler: app
}
