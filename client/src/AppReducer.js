

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

      
            return {
                ...state,
                account: {
                    balance: state.account.balance + action.payload.item.amountSaved,
                    payday: state.account.payday,
                    expenses: state.account.expenses.filter(expense => expense.id !== action.payload.item.id),
                    expenseOrder: state.account.expenseOrder,
                    goals: state.account.goals,                
                    transactions: state.account.transactions
            }  
        }
        case 'ADD_EXPENSE':
            
            return {
                ...state,
                account: {
                    balance: state.account.balance,
                    payday: state.account.payday,
                    expenses: [...state.account.expenses, action.payload.item],
                    expenseOrder: state.account.expenseOrder,
                    goals: state.account.goals,                
                    transactions: state.account.transactions
            }  
        }
        case 'UPDATE_PAYDAY':
            return {
                ...state,
                account: {
                    balance: state.account.balance,
                    payday: action.payload.item,
                    expenses: state.account.expenses,
                    expenseOrder: state.account.expenseOrder,
                    goals: state.account.goals,                
                    transactions: state.account.transactions
            }  
        }
        case 'UPDATE_EXPENSE_SORT':
            return {
                ...state,
                account: {
                    balance: state.account.balance,
                    payday: state.account.payday,
                    expenses: state.account.expenses,
                    expenseOrder: action.payload.item,
                    goals: state.account.goals,                
                    transactions: state.account.transactions
            }  
        }
        case 'UPDATE_EXPENSE':

            var currentExpense = state.account.expenses.find((expense) => expense.id == action.payload.item.id);
            var updatedProperties = action.payload.item;
            
            var updatedExpense = {...currentExpense, ...updatedProperties}
            let newExpenses = state.account.expenses.filter((expense) => expense.id !== action.payload.item.id)
            newExpenses.push(updatedExpense);

            return {
                ...state,
                account: {
                    balance: state.account.balance,
                    payday: state.account.payday,
                    expenses: newExpenses,
                    expenseOrder: state.account.expenseOrder,
                    goals: state.account.goals,                
                    transactions: state.account.transactions
                }
        }

        default:
            return state;
    }
}
export default AppReducer;