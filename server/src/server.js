import app from "./app.js";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
const PORT = process.env.PORT || 5000;
dotenv.config();
async function startServer() {
await connectDb();
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
}
startServer();