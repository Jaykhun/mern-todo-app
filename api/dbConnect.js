const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_URL)
        console.log('Connected');        
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = dbConnect