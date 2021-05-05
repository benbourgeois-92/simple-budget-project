import React, {useState} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import axios from 'axios';
import '../css/register.css';


const Register = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        password2: ''

    });

    const {fname, lname, email, password, password2} = formData;
    
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async(e) => {
        //prevent default html form behavior
        e.preventDefault();
        if(password !== password2) {
            alert('Passwords do not match');
        } else {
            const name = fname + ' ' + lname;

            const newUser = {
                name,
                email,
                password
            }

            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                const body = JSON.stringify(newUser);

                const res = await axios.post('/api/users', body, config)
                if(res.data.token){
                    history.push(`/home/dashboard`);
                }else{
                    alert("no token")
                }
                console.log(res.data);

                //if user receives token
                //log in and redirect to dashboard
                //else if user already exists
                //redirect to sign in page


            } catch(err){

                console.error(err.response.data);

                //display an error and say, try again/unable to log in
            }
        }
    }


    return (

        <div className="registerComponent crdStyle">

            <img src="https://via.placeholder.com/150X75" alt="logo"/>

            <h2>Sign Up</h2>
            <p>Welcome to Simplicity!</p>
            
            <form onSubmit={e => onSubmit(e)}>
                <label for="fname">Name:</label><br/>
                <input required type="text" id="fname" name="fname" placeholder="first name" value={fname} onChange={e => onChange(e)}/><br/>
                <input required type="text" id="lname" name="lname" placeholder="last name" value={lname} onChange={e => onChange(e)}/><br/><br/>
                <label for="email">Email:</label><br/>
                <input required type="text" id="email" name="email" placeholder="email" value={email} onChange={e => onChange(e)}/><br/><br/>
                <label for="password">Password:</label><br/>
                <input required type="password" minLength="8" id="password" name="password" placeholder="password" value={password} onChange={e => onChange(e)}/><br/>
                <input required type="password" minLength="8" id="password2" name="password2" placeholder="confirm password" value={password2} onChange={e => onChange(e)}/><br/><br/><br/>

                
                
                
                
                <input type="submit" value="Sign Up"/>
            </form> 

        </div>

        );

    




}

export default Register;