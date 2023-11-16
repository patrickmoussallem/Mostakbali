const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://dbMostakbali:Mostakbali@cluster0.os8unvy.mongodb.net/")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection