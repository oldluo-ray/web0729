const http = require('http')
const express = require('express')
const server = http.createServer((req, res) => {
  // if(判断路径){

  // }else if(){

  // }
  console.log('接收到请求了')
})
server.listen(5000, (err) => {
  if (err) console.log('服务器启动失败', err)
  else console.log('服务器启动成功')
})
