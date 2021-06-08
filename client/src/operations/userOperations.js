import {React, useContext} from 'react';
import GlobalContext from '../user-context'
import axios from 'axios'
import setAuthToken from './setAuthToken';

export const login = async(email, password) => {

    const config = {
            headers: {
                    'Content-Type' : 'application/json'
            }
    }

    const body = JSON.stringify({ email, password});

    try {

            const res = await axios.post('/api/auth', body, config);

            if(res.data.token){
                console.log(res.data);
                localStorage.setItem('token', res.data.token); 
                alert('success')
            }


    } catch (err) {

            const errors = err.response.data.errors;
            console.log("login failure")
            localStorage.removeItem('token'); 
            console.log(errors);

    }

    
}

export const loadUser = async()  => {

    const {operations} = useContext(GlobalContext);

    const orders = [
        ,
        {type: "AUTH_ERROR", item: null}
    ]

    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {

        const res = await axios.get('/api/auth');

        return res;



    //     dispatch({
    //         type: 'USER_LOADED',
    //         payload: res.data
    //    })


    } catch(err){

    //     dispatch({
    //         type: 'AUTH_ERROR',
    //    })

    }





}

export default login;