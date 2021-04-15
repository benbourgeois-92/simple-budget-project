import React, {useContext, useState, useCallback, useEffect} from 'react';
import '../css/expenses-component.css'
import Expense from '../components/Expense';
import GlobalContext from '../user-context' ;
import Draggable from '../components/Draggable';
import {inRange, range} from 'lodash'


export const ExpensesSortableListview = (props) => {

    const sorting = props.sorting;
    const {account} = useContext(GlobalContext)

    console.log(account.expenses)
  
    return (
                
            <ul className="expensesListview">
                        
                    {account.expenses.map((expense) => {

                        return (
                                <Expense key={expense.id} sorting={sorting} info={expense} />
                            )})
                        } 
            </ul>
        )
};

export default ExpensesSortableListview;