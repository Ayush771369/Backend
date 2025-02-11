const mongoose = require('mongoose');   // Import the mongoose module
const { DB_NAME } = require('../constants'); // Import the DB_NAME from the config file

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) // Connect to the MongoDB database
        console.log('Connected to MongoDB!'); // Log a success message to the console
    }
        catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with an error
    }
}
