import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import GlobalContext from '.././user-context';
import '../css/nav.css';

const Navbar = () => {

    const [menuStatus, setMenuStatus] = useState({
        menuOpen: false,
    });

    const menuToggle = () => {
        if(!menuOpen){
            setMenuStatus({ menuOpen: true });
        } else {
            setMenuStatus({menuOpen: false});
        }
    }

    const {menuOpen} = menuStatus;
    const {user} = useContext(GlobalContext)
    

    return (
            <div>
                <div className="navigationComponent">

                    <div className="navHeader">
                        <span onClick={menuToggle} id="navigationToggle" className="material-icons">menu</span>
                    </div>	

                    <nav id="mySidenav" className={ menuOpen ? 'sidenav open':'sidenav'} >
                            <Link onClick={menuToggle} className="userProfile" to="/home/profile">
                            {/*<img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="profile photo"> */}
                            
                            <div className="photoPlaceholder">
                                <p>{user.username.charAt(0).toUpperCase()}</p>
                            </div>

                            <div>
                                <p>{user.username}</p>
                                <p>{user.subscription}</p>								
                            </div>
                        </Link>

                        <div>
                            <Link onClick={menuToggle} to="/home/dashboard">Activity</Link>
                            <Link onClick={menuToggle} to="/home/expenses">Expenses</Link>
                            <Link onClick={menuToggle} to="#">Goals</Link>
                            <Link onClick={menuToggle} to="/home/banksettings">Bank Settings</Link>	
                        </div>


                        <div className="btnRow">
                            <ul>
                                <li><Link to="/">Sign Out</Link></li>
                                <li><Link to="#" onClick={menuToggle} className="closeMenu">Close Menu</Link></li>
                            </ul>
                        </div>


                    </nav>
                   
                <div onClick={menuToggle} className={ menuOpen ? 'backgroundOverlay open' : 'backgroundOverlay'}></div>

            </div>
        </div>
        )
        
};

export default Navbar;