const { login } = require('../controller/user')
const { Success, Error } = require('../model/res')


const user = (req, res) => {
  const method = req.method
  const path = req.url.split('?')[0]

  if (method == 'GET' && path == '/api/blog/login') {
    const data = login(req.query.username, req.query.psd)
    if (data) {
      return new Success(data)
    } else {
      return new Error(data)
    }
  }
  if (method == 'POST' && path == '/api/blog/zhuce') {
    return {
      msg: '这是zhuce借口'
    }
  }
}

module.exports = user