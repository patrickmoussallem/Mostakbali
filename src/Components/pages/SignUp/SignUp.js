import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import BasicBreadcrumbs from '../../BasicBreadcrumbs';

const SignUp = () => {
	const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
	const [firstname, setFirstname]=useState('')
	const [lastname, setLastname]=useState('')
	const [username, setUsername]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password,firstname,lastname,username
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/",{state:{isLoggedin:true}})
                }
            })
            .catch(e=>{
                alert(e)
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


	return (
		<div className='signup_container'>
			<div className='signup_form_container'>
				<div className='left'>
					<h1>Welcome Back</h1>
					<Link to="/Signin">
						<button type="button" className='white_btn'>
							Sign in
						</button>
					</Link>
				</div>
				<div className='right'>
				<div className='breadcrumbsu'>
						<BasicBreadcrumbs page='Sign Up'/>

					</div>
					<form className='form_container'>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							
							onChange={(e) => { setFirstname(e.target.value) }} 
							
							required
							className='input'
						/>
						<input
							type="text"
							placeholder="Last Name"
							
							onChange={(e) => { setLastname(e.target.value) }} 
							
							required
							className='input'
						/>
						<input
							type="text"
							placeholder="Username"
							
							onChange={(e) => { setUsername(e.target.value) }} 
							
							required
							className='input'
						/>
						<input
							type="email"
							placeholder="Email"
							
							onChange={(e) => { setEmail(e.target.value) }} 
							
							required
							className='input'
						/>
						<input
							type="password"
							placeholder="Password"
							
							onChange={(e) => { setPassword(e.target.value) }} 
							
							required
							className='input'
						/>
						
						<button type="submit" onClick={submit} className='green_btn'>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;