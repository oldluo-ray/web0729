const app = require('express')()
const cors = require('cors')

app.use(require('express').static('web'))
app.use(cors())
app.get('/test', (req, res) => {
  // console.log(req.query)
  const { callback } = req.query
  console.log(req.query)
  // res.send('const obj = {name: "zs"}')
  res.send(`${callback}({name: "zs"})`) //'fn({name: "zs"})'
})
app.post('/test', (req, res) => {
  console.log(req.body)
  res.send('/test-post')
})

app.listen(5000, () => {
  console.log('ok')
})
