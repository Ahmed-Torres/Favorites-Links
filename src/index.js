const express = require("express");
const morgan = require("morgan")

//initialization
const app = express();

//settings
app.set("port", process.env.PORT || 4000)

//middleware
app.use(morgan("dev"))

//global variables

//routes

//public

//starting the server
app.listen(app.get("port"), ()=>{
    HTMLFormControlsCollection.log("server on port", app.get("port"))
})