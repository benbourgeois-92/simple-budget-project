import {useContext, React} from 'react';
import {DetailButton, ProfileHeader} from './Widgets'
import '../css/profile_information.css'
import GlobalContext from '../user-context';

export const ProfileInformation = (props) => {

    const {user, changeModalScreen} = useContext(GlobalContext);
    const {user_email, username, subscription} = user;

    const orders = [
        {screen: "UPDATE_NAME", item: null},
        {screen: "UPDATE_EXPENSE", item: {properties: {date: null, dateLabel: null}, function: "DATE"}},
    ];

    return (
        <div className="profileInformationComponent">
            <ProfileHeader name={username} subscription={subscription} date={new Date}/>
            <div>
                <section> 
                    <DetailButton title="Name" subtitle={username} icon="icon profile" order={orders[0]} changeModalScreen={changeModalScreen} />
                    <DetailButton title="Subscription" subtitle={subscription} icon="icon membership" order={orders[0]} changeModalScreen={changeModalScreen} />
                    <DetailButton title="Email" subtitle={user_email} icon="icon email" order={orders[0]} changeModalScreen={changeModalScreen} />
                </section>
                <section>
                    <DetailButton title="Error Forum" subtitle={"Report any bugs you find"} icon="icon bug" order={orders[0]} changeModalScreen={changeModalScreen} />
                    <DetailButton title="Delete" subtitle={"Delete Your Account"} icon="icon delete" order={orders[0]} changeModalScreen={changeModalScreen} />

                </section>
            </div>        
        </div>

    )
}

export default ProfileInformation;