const express = require('express')

const app = express()
app.get('/test', (req, res) => {
  console.log('5001',req.get('host'))
  res.send('5001-ok')
})
app.listen(5001, () => {
  console.log('5001开启了')
})
