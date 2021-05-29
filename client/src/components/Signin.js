import '../css/sign-in.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {useFormik} from "formik";

const Signin = (props) => {

    const validate = values => {
        const errors = {}
    
        if (!values.email) {
          errors.email = 'Required'
        } else if (values.email.length < 4) {
          errors.email = 'Must be 5 characters or more'
        }
    
        if (!values.password) {
          errors.password = 'Required'
        } else if (values.password.length < 8) {
          errors.password = 'Must be 8 characters or more'
        } else if (values.password === '12345678') {
          errors.password = 'Must not be 12345678 !!!'
        }
    
        return errors
      }

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });


    return (

        <div className="signinComponent">
            <div className="signinSummary">
                <img src="https://via.placeholder.com/150X75" alt=""/>
                <h2>Sign in to <br/> your account</h2>
                <p>Welcome back!</p>
            </div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <input type="email" id="email" name="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} />
                    </div>
                    <div>
                        <input type="password" id="password" name="password" placeholder="Password" onChange={formik.handleChange} value={formik.values.password} />
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