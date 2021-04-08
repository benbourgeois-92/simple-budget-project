import '../css/sign-in.css';
import React from 'react';
import {Link} from 'react-router-dom';

const Signin = (props) => {

    return (

        <div className="signinComponent">
            <div className="signinSummary">
                <img src="https://via.placeholder.com/150X75" alt=""/>
                <h2>Sign in to <br/> your account</h2>
                <p>Welcome back!</p>
            </div>
            <div>
                <form action="/action_page.php">
                    <div>
                        <input type="text" id="email" name="email" placeholder="Username"/>
                    </div>
                    <div>
                        <input type="text" id="password" name="password" placeholder="Password"/>
                        <input type="submit" placeholder="Sign In"/>						
                    </div>
                </form>
                <div>
                    <Link to="/home/banksettings">Reset Password</Link>
                    <Link to="/home/dashboard">Forgot Username</Link>
                    <Link to="/register">Need an account?</Link>
                </div> 
            </div>
            <div className="copyrightInfo">
                <p>Budgeting Software by Knosis Web, LLC.</p>
            </div>
        </div>	
    )
};

export default Signin;