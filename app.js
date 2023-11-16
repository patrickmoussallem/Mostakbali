const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())





app.post("/Signin",async(req,res)=>{
    const{email,password}=req.body;

    try{
        const check=await collection.findOne({email:email})
        const checkpass = await collection.findOne({password:password})

        if(check){
            if(checkpass){
                res.json("exist");

            }else{
                res.json("incorrectPassword");
            }

            
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        console.error(e);
        res.status(500).json({ error: 'An error occurred' });
    }

})



app.post("/Signup",async(req,res)=>{
    const{email,password,firstname,lastname,username}=req.body

    const data={
        
        email:email,
        password:password,
        firstname:firstname,
        lastname:lastname,
        username:username
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        console.error(e);
        res.status(500).json({ error: 'An error occurred' });
    }

})

app.listen(8000,()=>{
    console.log("port connected");
})
