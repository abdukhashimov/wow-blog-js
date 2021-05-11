const bcrypt = require('bcrypt')

function generateHashPass(data) {
    let hashed = bcrypt.hashSync(data,10)
    return hashed
}

function compareHashedPass(data,encrypt) {
    let password = bcrypt.compareSync(data,encrypt)
    return password
}


module.exports = {
    generateHashPass,
    compareHashedPass
}