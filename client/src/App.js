import './App.css';

import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
// import axios from 'axios';

import LoginPage from './pages/LoginPage';

import Navbar from './components/Navbar';
import Popup from './components/Popup';
import Notification from './components/Notification';
import Register from './components/Register';
import Pages from './pages/Pages';

import GlobalContext from './user-context';
import  {loadUser} from './operations/userOperations';
import  {setAuthToken} from './operations/setAuthToken';

import React, {useContext, useEffect} from 'react';

if(localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {

//   componentDidMount(){

//     // const user = this.context;
//     // console.log(user.isAuthenticated)

//   //   const res = await axios.get('server url');
//   //   console.log(res.data);
 
//   }
    const {user, operation} = useContext(GlobalContext)

    useEffect(() => {
        //this will only run once because of []
        console.log(user)
        
        operation();
    }, []);


    return (
        <Router>
            <Switch>

                <Route exact path='/' component={LoginPage}/>
                <Route exact path='/register' component={Register}/>

                <Route path='/home'>
                    <Navbar />
                    <Pages />
                </Route>

            </Switch>
        </Router>
    );
}


export default App;
