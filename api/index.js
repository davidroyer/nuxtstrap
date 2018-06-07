const jsonServer = require('json-server')
const path = require('path')
const app = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()


app.use(middlewares)

app.post('/auth/login', (req, res) => {
  if (req.body.username === 'admin' && req.body.password === process.env.PASSWORD) {
    req.session.authUser = { username: 'admin' }
    return res.json({ username: 'admin' })
  }
  res.status(401).json({ message: 'Bad credentials' })
})

app.post('/auth/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
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
