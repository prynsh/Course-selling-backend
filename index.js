const express = require("express");

const app = express();

app.use(express.json());

app.post("/signup", (req,res)=>{

})

app.post("/signin", (req,res)=>{
    
})

app.get("/courses", (req,res)=>{
    
})

app.post("/purchase", (req,res)=>{
    
})

app.get("/purchasedcourses", (req,res)=>{
    
})

app.listen(3000);