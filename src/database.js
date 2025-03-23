import mongoose from "mongoose";

mongoose.connect(process.env.CONECTION_DB, {
    serverSelectionTimeoutMS: 30000, 
    socketTimeoutMS: 45000, 
})
.then(db => console.log('Database connected'))
.catch(err => console.error('Error connecting to MongoDB:', err));

export default mongoose;