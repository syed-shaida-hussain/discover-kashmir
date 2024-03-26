import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL);
        const connection = mongoose.connection;
        connection.on('connected' , () => {console.log("MongoDB successfully connected")});
        connection.on('error' , (err) => {console.log(err)})
    } catch (error) {
        console.log(e);
    }
};