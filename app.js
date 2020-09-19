const querystring = require('querystring')
const blogRouter = require('./src/router/blog')
const userRouter = require('./src/router/user')
const fs = require('fs')
const path = require('path')
const session = {}

//处理postdata
const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({})
      return
    }
    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if (postData) {
        resolve(JSON.parse(postData))
      } else {
        resolve({})
        return
      }
    })
  })
}

const serverHandle = async (req, res) => {
  if (req.url == '/favicon.ico') {
    return
  }

  res.setHeader('Content-type', 'application/json')

  //解析query
  const query = querystring.parse(req.url.split('?')[1])
  req.query = query
  req.id = query.id

  //解析cookie
  let need = false
  const cookie = req.headers.cookie || ''
  const arr = cookie.split(';')
  let cookieObj = {}
  arr.forEach(el => {
    if (el) {
      cookieObj[el.split('=')[0]] = el.split('=')[1]
    } else {
      return
    }
  });
  req.cookie = cookieObj
  // Set-Cookie: delPer=0; path=/; domain=.baidu.com
  //解析session
  console.log(req.cookie, '=====');
  let { userId } = req.cookie
  if (userId) {
    if (session[userId]) {
      req.session = session[userId]
    } else {
      session[userId] = {}
      req.session = session[userId]
    }
  } else {
    need = true
    userId = Date.now()
    session[userId] = {}
    req.session = session[userId]
  }

  res.setHeader('Set-Cookie', 'user=123; path=/; domain=.baaaau.com')


  //处理postdata

  const resData = await getPostData(req)
  req.body = resData
  //路由数据
  const blogData = blogRouter(req, res)
  const userData = userRouter(req, res)
  if (blogData) {
    res.end(JSON.stringify(blogData))
    return
  }
  if (userData) {
    res.end(JSON.stringify(userData))
    return
  }

  res.end('目前没有这个页面')


}

module.exports = serverHandle