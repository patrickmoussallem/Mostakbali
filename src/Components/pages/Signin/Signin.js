import './Signin.css'
import React, { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"
import BasicBreadcrumbs from '../../BasicBreadcrumbs';




const Signin = () => {
	const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try {
			const res = await axios.post("http://localhost:8000/Signin", {
				email,
				password,
			});

			console.log(res);

			if (res.data.message === "Login successful") {
				console.log("Hello after history");
				localStorage.setItem('token', res.data.token);
				console.log(res.token);
				
				history("/");
				
			} else if (res.data === "notexist") {
				alert("User does not exist");
			}

		} catch (e) {
			alert(e);
			console.log(e);
		}
		

    }


	return (
		<div className='login_container1'>
			<div className='login_form_container1'>
				<div className='left1'>
				<div className='breadcrumbsi'>
						<BasicBreadcrumbs page='Sign in'/>

					</div>
					<form className='form_container1'>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							onChange={(e) => { setEmail(e.target.value) }}
							required
							className='input1'
						/>
						<input
							type="password"
							placeholder="Password"
							onChange={(e) => { setPassword(e.target.value) }} 
							required
							className='input1'
						/>
						
						<button type="submit" onClick={submit} className='green_btn1'>
							Sign In
						</button>
					</form>
				</div>
				<div className='right1'>
					
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className='white_btn1'>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Signin;