import React, {useContext} from 'react';
import GlobalContext from '.././user-context';
import '../css/popup-component.css';
import {UpdatePaydayScreen, AddExpenseScreen, DeleteExpenseScreen, DefaultScreen, UpdateTransactionScreen, EditExpenseScreen, SelectSortScreen} from '../operations/modalScreens';

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
		case 'UPDATE_PAYDAY':
			ModalScreen = <UpdatePaydayScreen/>
			break;
		case 'SELECT_SORT':
			ModalScreen = <SelectSortScreen/>
			break;

		case 'UPDATE_EXPENSE_AMOUNT':
			ModalScreen = <UpdatePaydayScreen/>
			break;
		case 'UPDATE_EXPENSE_DUEDATE':
			ModalScreen = <UpdatePaydayScreen/>
			break;
		case 'UPDATE_EXPENSE_MONEYIN':
			ModalScreen = <UpdatePaydayScreen/>
			break;
		case 'UPDATE_EXPENSE_CONTRIBUTION':
			ModalScreen = <UpdatePaydayScreen/>
			break;
		case 'UPDATE_EXPENSE_MONEYOUT':
			ModalScreen = <UpdatePaydayScreen/>
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