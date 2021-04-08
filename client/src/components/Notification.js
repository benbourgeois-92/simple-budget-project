import React, { useContext } from 'react';
import '../css/notification-component.css';
import GlobalContext from '../user-context';


const Notification = () => {

    const {screen} = useContext(GlobalContext);

    const style = "display crdStyle open";


    switch(screen.notification.type){

        case 'SUCCESS':
            return (
                <div className="notificationComponent">
                    <div className={style}>
                        <em className="material-icons">
                            done_outline
                        </em>
                        <h2>
                            {screen.notification.message}
                        </h2>
                    </div>
                </div>
            )
        case 'FAILURE':
            return (
                <div className="notificationComponent">
                    <div className={style}>
                        <em  className="material-icons">
                            cancel
                        </em>
                        <h2>
                        {screen.notification.message}
                        </h2>
                    </div>
                </div>
            )
        case 'MESSAGE':
            return (
                <div className="notificationComponent">
                    <div className={style}>
                        <em  className="material-icons">
                            notifications
                        </em>
                        <h2>
                        {screen.notification.message}
                        </h2>
                    </div>
                </div>
            )
        default:
            return (
                <div className="notificationComponent">
                    <div className={style}>
                        <em  className="material-icons">
                            notifications
                        </em>
                        <h2>
                        {screen.notification.message}
                        </h2>
                    </div>
                </div>
            )  
    }

}

export default Notification;