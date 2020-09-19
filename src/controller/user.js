const login = (username, psd) => {
  console.log('===============', psd);
  if (username == 'zhangsan' && psd == '123') {
    return true
  }
  return false
}


module.exports = {
  login
}