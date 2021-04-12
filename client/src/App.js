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

import React, {useContext, useEffect} from 'react';

const App = () => {

//   componentDidMount(){

//     // const user = this.context;
//     // console.log(user.isAuthenticated)

//   //   const res = await axios.get('server url');
//   //   console.log(res.data);
 
//   }
    const user = useContext(GlobalContext)

    useEffect(() => {
        //this will only run once because of []
        console.log(user)
    }, []);


    return (
        <Router>
            <Switch>

                <Route exact path='/' component={LoginPage}/>
                <Route exact path='/register' component={Register}/>

                <Route path='/home'>
                    <Navbar />
                    <Pages />

                  <Popup />                    
                </Route>

            </Switch>
        </Router>
    );
}


export default App;
