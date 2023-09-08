"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = require("./app");
require("dotenv/config");
const data_source_1 = require("./data-source");
data_source_1.AppDataSource.initialize()
    .then(() => {
    const PORT = process.env.PORT || 3000;
    app_1.app.listen(PORT, () => {
        console.log("Server is running on port 3000");
        console.log('"baseUrl": "http://127.0.0.1:3000"');
    });
})
    .catch(error => { console.log(error); });
