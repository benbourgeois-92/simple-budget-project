import React, {useContext} from 'react';
import GlobalContext from '.././user-context';
import '../css/popup-component.css';
import {AddExpenseScreen, DeleteExpenseScreen, DefaultScreen, UpdateTransactionScreen, EditExpenseScreen} from '../operations/modalScreens';

const Popup = () => {

	const {togglePopup, screen} = useContext(GlobalContext);


	console.log(screen)
	console.log(screen.modal_screen)

	let ModalScreen;
	switch(screen.modal_screen){

		case 'DELETE_EXPENSE':
			ModalScreen = <DeleteExpenseScreen/>
			break;
		case 'UPDATE_TRANSACTION':
			ModalScreen = <UpdateTransactionScreen/>
			break;
		case 'ADD_EXPENSE':
			ModalScreen = <AddExpenseScreen/>
			break;
		case 'UPDATE_EXPENSE':
			ModalScreen = <EditExpenseScreen/>
			break;
		case 'DEFAULT':
			ModalScreen = <DefaultScreen/>
			break;
		default:
			ModalScreen = <DefaultScreen/>
	}

	return (
			<div className="popupComponent">
				<div className={screen.popupOpen ? 'popup open' : 'popup'}>
					{ModalScreen}
				</div>
				<div onClick={()=> togglePopup(screen.popupOpen)} className={screen.popupOpen ? 'backgroundOverlay open' : 'backgroundOverlay' }></div>
			</div>
			)



}


export default Popup;