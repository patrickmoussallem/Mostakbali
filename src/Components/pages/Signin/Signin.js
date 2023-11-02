import './Signin.css'
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Signin = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className='login_container1'>
			<div className='login_form_container1'>
				<div className='left1'>
					<form className='form_container1' onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className='input1'
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className='input1'
						/>
						{error && <div className='error_msg1'>{error}</div>}
						<button type="submit" className='green_btn1'>
							Sing In
						</button>
					</form>
				</div>
				<div className='right1'>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className='white_btn1'>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Signin;