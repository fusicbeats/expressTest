import express from "express"
const app = express()
const port =3000;

app.use("/",(req,res)=>{
    res.send("Hello My name is donald trump");
})

app.use("/about",(req,res)=>{
    res.send("I am going to be the precident");
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})