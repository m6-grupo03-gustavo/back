import "reflect-metadata";
import { app } from "./app";
import "dotenv/config";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
.then(() =>{
    const PORT = process.env.PORT || 3000
    app.listen(PORT, ()=>{
        console.log("Server is running on port 3000");
        console.log('"baseUrl": "http://127.0.0.1:3000"');
    })
})
.catch (error => {console.log(error)})
