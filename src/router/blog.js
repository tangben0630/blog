const { getList, getDetial, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { Success, Error } = require('../model/res')

// let id = 2
const blog = (req, res) => {
  const method = req.method
  const path = req.url.split('?')[0]
  if (method == 'GET' && path == '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = ''
    const listData = getList(author, keyword)
    return new Success(listData)
  }
  if (method == 'GET' && path == '/api/blog/detail') {
    const data = getDetial(req.id)
    return new Success(data)
  }
  if (method == 'POST' && path == '/api/blog/new') {
    const data = newBlog(req.body)
    console.log("blog -> data", data)
    return new Success(data)
  }
  if (method == 'POST' && path == '/api/blog/del') {
    const data = delBlog(req.id, req.body)
    if (data) {
      return new Success(data)
    } else {
      return new Error('更新失败')
    }
  }
  if (method == 'POST' && path == '/api/blog/update') {
    const data = updateBlog(req.id, req.body)
    if (data) {
      return new Success(data)
    } else {
      return new Error('更新失败')
    }
  }
}

module.exports = blog