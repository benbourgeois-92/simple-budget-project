import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import transactions from './operations/transactionsArray'
import expenseList from './operations/expenseArray';



export const app = {
        user: {
                id: 'id',
                user_email: 'placeholder_email@gmail.com',
                first_name: 'Firstname',
                last_name: 'Lastname',
                username: 'Firstname Lastname',
                user_image: 'None',
                subscription: 'Free Trial',
                isAuthenticated: false,                
        },
        screen: {
                popupOpen: false,
                modal_screen: 'DEFAULT',
                item: {},
        },
        account: {

                balance: 2033.33,
                balance_to_budget: 0.0,
                payday: new Date(),
                expenses: expenseList,
                expenseOrder: 'Alphabetically',
                goals: [],
                goalsOrder: 'Alphabetically',
                transactions: transactions
                
        }         
}


export const GlobalContext = createContext(app);

export const GlobalProvider = ({children}) => {
        
        const [state, dispatch] = useReducer(AppReducer, app);

        function togglePopup(open, reset) {

                if(open){

                        dispatch({type: 'TOGGLE_POPUP', payload: false})
                }else{
                        dispatch({type: 'TOGGLE_POPUP', payload: true})
                }

                if(reset){
                        dispatch({type: 'CHANGE_MODAL_SCREEN', payload: "DEFAULT"})
                        dispatch({type: 'CHANGE_MODAL_SCREEN', payload: reset})
                }

        }


        function triggerNotification(notify){
                // dispatch({type: 'TRIGGER_NOTIFICATION', payload: notify})
                alert(notify);

        }

        function changeModalScreen(order){
                console.log(order)
                dispatch({type: 'CHANGE_MODAL_SCREEN', payload: order})
                dispatch({type: 'TOGGLE_POPUP', payload: true})
        }

        function operation(order){

                console.log("operating on this object: ")
                console.log(order.item)
                

                switch(order.type){
                        case 'DELETE_ITEM':
                                dispatch({type: 'DELETE_ITEM', payload: order})
                                dispatch({type: 'TOGGLE_POPUP', payload: false})
                                break;
                        case 'ADD_EXPENSE':
                                dispatch({type: 'ADD_EXPENSE', payload: order})
                                dispatch({type: 'TOGGLE_POPUP', payload: false})
                                break;
                        case 'UPDATE_EXPENSE':
                                dispatch({type: 'UPDATE_EXPENSE', payload: order})
                                dispatch({type: 'TOGGLE_POPUP', payload: false})
                                break;
                        case 'UPDATE_PAYDAY':
                                dispatch({type: 'UPDATE_PAYDAY', payload: order})
                                dispatch({type: 'TOGGLE_POPUP', payload: false})
                                break;
                        case 'UPDATE_EXPENSE_SORT':
                                dispatch({type: 'UPDATE_EXPENSE_SORT', payload: order})
                                dispatch({type: 'TOGGLE_POPUP', payload: false})
                                break;
                        case 'UPDATE_EXPENSE_TITLE':
                                dispatch({type: 'UPDATE_EXPENSE_TITLE', payload: order})
                                dispatch({type: 'UPDATE_EXPENSE_NOTE', payload: order})
                                dispatch({type: 'TOGGLE_POPUP', payload: false})
                                break;
                        default:
                                return;
                }

        }



        return (
                <GlobalContext.Provider value={{
                        user: state.user,
                        screen: state.screen,
                        account: state.account,
                        togglePopup,
                        triggerNotification,
                        changeModalScreen,
                        operation
                }}>
                        {children}
                </GlobalContext.Provider>
        )
}


export default GlobalContext;