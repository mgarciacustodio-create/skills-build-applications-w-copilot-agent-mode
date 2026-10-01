import mongoose from 'mongoose';
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
const db = mongoose.connection;
const connectDatabase = async () => {
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to octofit_db');
    }
    catch (error) {
        console.warn('MongoDB is unavailable. Continuing without the database connection:', error);
    }
};
void connectDatabase();
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});
export default db;
