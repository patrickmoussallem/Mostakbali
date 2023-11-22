const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')






app.post("/Signin",async(req,res)=>{
    const{email,password}=req.body;

    try{
        const user =await collection.findOne({email:email})
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch){
                            const token = jwt.sign(
                    {
                        userId: user._id,
                        username: user.username,
                        email: user.email,
                    },
                    'bchjidhifawf7629otrhgui3n398742ctc273ncthfdjfyjfyjy40x203f78h3n578fthfyfjtytyjr0ctvchc', 
                    { expiresIn: '1h' } // Token expiration time (1 hour)
                );

                res.status(200).json({ message: "Login successful", token });
        }
        else{
            res.json("incorrectPassword");
        }
    }
    catch(e){
        console.error(e);
        res.status(500).json({ error: 'An error occurred' });
    }

})



app.post("/Signup", async (req, res) => {
    const { email, password, firstname, lastname, username } = req.body;

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const data = {
                email: email,
                password: hashedPassword,
                firstname: firstname,
                lastname: lastname,
                username: username,
            };

            await collection.insertMany([data]);

            const token = jwt.sign(
                {
                    userId: data._id,
                    username: data.username,
                    email: data.email,
                },
                'bchjidhifawf7629otrhgui3n398742ctc273ncthfdjfyjfyjy40x203f78h3n578fthfyfjtytyjr0ctvchc',
                { expiresIn: '1h' }
            );

            res.status(200).json({ message: "notexist", token });
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'An error occurred' });
    }
});


app.listen(8000,()=>{
    console.log("port connected");
})
