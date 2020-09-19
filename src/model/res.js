class BaseModel {
    constructor(data, mes) {
        if (typeof data == 'string') {
            this.message = data
            data = null
        }
        if (data) {
            this.data = data //其实目的就是data 不是string
        }
        if (mes) {
            this.message = mes
        }
    }
}

class Success extends BaseModel {
    constructor(data, mes) {
        super(data, mes)
        this.errno = 0
    }
}
class Error extends BaseModel {
    constructor(data, mes) {
        super(data, mes)
        this.errno = -1
    }
}


module.exports = {
    Success,
    Error
}