

export const AppReducer = (state, action) => {


    switch(action.type) {
        case 'TOGGLE_POPUP':

            return {
                ...state,
                screen: {
                    popupOpen: action.payload,
                    modal_screen: state.screen.modal_screen,                  
                    item: state.screen.item

            }
        }
        case 'TRIGGER_NOTIFICATION':
            return {
                ...state,
                screen: {
                    notification: {
                        message: action.payload.message,
                        type: action.payload.type
                    } 
            }
        }
        case 'CHANGE_MODAL_SCREEN':
            return {
                ...state,
                screen: {
                    popupOpen: state.screen.popupOpen,                  
                    modal_screen: action.payload.screen,
                    item: action.payload.item
            }
        }
        case 'DELETE_ITEM':

        console.log(action.payload.item.id)
        const newList = state.account.expenses.filter(expense => expense.id !== action.payload.item.id);
        console.log(newList);

            return {
                ...state,
                account: {
                    balance: state.account.balance + action.payload.item.amountSaved,
                    expenses: newList,
                    goals: state.account.goals,                
                    transactions: state.account.transactions
            }  
        }
        case 'ADD_EXPENSE':

            const newExpenses = state.account.expenses;
            newExpenses.push(action.payload.item)

            return {
                ...state,
                account: {
                    balance: state.account.balance,
                    expenses: newExpenses,
                    goals: state.account.goals,                
                    transactions: state.account.transactions
            }  
        }
        default:
            return state;
    }
}
export default AppReducer;