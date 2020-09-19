const getList = (author, key) => {
  return [{
      id: 1,
      author: "luo",
      con: "海贼",
      title: "王路飞"
    },
    {
      id: 1,
      author: "zhang",
      con: "888",
      title: "你想干什么"
    }, {
      id: 2,
      author: "hong",
      con: "999",
      title: "我不知道"
    }
  ]
}

const getDetial = id => {
  return {
    id: 2,
    author: "hong",
    con: "999",
    title: "我不知道"
  }
}

const newBlog = (data = {}) => {
  return {
    id: 4
  }
}
const updateBlog = (id, data = {}) => {
  return true
}

const delBlog = id => {
  return true
}

module.exports = {
  getList,
  newBlog,
  getDetial,
  updateBlog,
  delBlog
}