const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

mongoose.connect(db);


const connectDB = async ()=> {
    try {
        await mongoose.connect(db);
        console.log('MongoDB connected...');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;