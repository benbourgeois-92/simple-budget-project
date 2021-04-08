import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../css/register.css';


const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const {email, password} = formData;
    
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async(e) => {
        //prevent default html form behavior
        e.preventDefault();
    
            const user = {
                email,
                password
            }

            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                const body = JSON.stringify(user);

                const res = await axios.post('/api/users', body, config)
                console.log(res.data);

            } catch(err){

                console.error(err.response.data);
            }
    }


    return (

        <div className="registerComponent crdStyle">

            <img src="https://via.placeholder.com/150X75" alt="logo"/>

            <h2>Sign In</h2>
            <p>Welcome to Simplicity!</p>
            
            <form onSubmit={e => onSubmit(e)}>
                <label for="email">Email:</label><br/>
                <input required type="text" id="email" name="email" placeholder="email" value={email} onChange={e => onChange(e)}/><br/><br/>
                <label for="password">Password:</label><br/>
                <input required type="password" minLength="8" id="password" name="password" placeholder="password" value={password} onChange={e => onChange(e)}/><br/>

                
                <input type="submit" value="Sign In"/>
            </form>
            <div>
                <Link to="/register">Don't have an account?</Link>
                <Link to="/forgotmypassword">Forgot your password?</Link>
            </div> 
        </div>
        );

    




}

export default Register;