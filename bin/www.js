const http = require('http')
const prot = 8000
const serverHandle = require('../app')
http.createServer(serverHandle).listen(prot)