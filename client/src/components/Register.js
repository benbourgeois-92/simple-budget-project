import React, {useState} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import axios from 'axios';
import '../css/register.css';
import {useFormik} from 'formik';

const Register = () => {



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
          fname: '',
          lname: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });


    const history = useHistory();



    // const [formData, setFormData] = useState({
    //     fname: '',
    //     lname: '',
    //     email: '',
    //     password: '',
    //     password2: ''

    // });

    // const {fname, lname, email, password, password2} = formData;
    
    // const onChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // }

    // const onSubmit = async(e) => {
    //     //prevent default html form behavior
    //     e.preventDefault();
    //         const name = fname + ' ' + lname;

    //         const newUser = {
    //             name,
    //             email,
    //             password
    //         }

    //         try {
    //             const config = {
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }
    //             }

    //             const body = JSON.stringify(newUser);

    //             const res = await axios.post('/api/users', body, config)
    //             if(res.data.token){
    //                 history.push(`/home/dashboard`);
    //             }else{
    //                 alert("no token")
    //             }
    //             console.log(res.data);

    //             //if user receives token
    //             //log in and redirect to dashboard
    //             //else if user already exists
    //             //redirect to sign in page


    //         } catch(err){

    //             console.error(err.response.data);

    //             //display an error and say, try again/unable to log in
    //         }
        
    // }


    return (

        <div className="registerComponent crdStyle">

            <img src="https://via.placeholder.com/150X75" alt="logo"/>

            <h2>Sign Up</h2>
            <p>Welcome to Simplicity!</p>
            
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="fname">Name:</label><br/>
                <input required type="text" id="fname" name="fname" placeholder="first name" onChange={formik.handleChange} value={formik.values.fname} /><br/>
                <input required type="text" id="lname" name="lname" placeholder="last name"  onChange={formik.handleChange} value={formik.values.lname}/><br/><br/>
                
                <label htmlFor="email">Email:</label><br/>
                <input required type="email" id="email" name="email" placeholder="email" onChange={formik.handleChange} value={formik.values.email}  /><br/><br/>
                
                <label htmlFor="password">Password:</label><br/>
                <input required type="password" minLength="8" id="password" name="password" placeholder="password" onChange={formik.handleChange} value={formik.values.password} /><br/>
                
                <input type="submit"Submit/>

            </form> 

        </div>

        );

    




}

export default Register;