const express = require('express')

const app = express()
app.get('/test', (req, res) => {
  console.log('5000', req.get('host'))
  res.send('5000-ok')
})
app.listen(5000, () => {
  console.log('5000开启了')
})
