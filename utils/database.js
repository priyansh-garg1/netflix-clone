import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
})

const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("Failed to connect to MongoDB",error))
}

export default databaseConnection;