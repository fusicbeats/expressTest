import express from "express"
const app = express()
const port =3000;

app.get("/",(req,res)=>{
    res.send("Hello My name is donald trump");
})

app.get("/about",(req,res)=>{
    res.send("I am going to be the precident");
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
