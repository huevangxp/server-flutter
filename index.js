// mongodb+srv://huevang:huevangxp@cluster0.bzpbn4n.mongodb.net/?retryWrites=true&w=majority
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/index");


startServer = () => {
    app.use(cors());

    app.use(express.json());

    app.use("/api", router);

    app.listen(7000, () => {
        console.log("Server started on port 7000");
    })
}

startServer();