import React, {useContext, useState, useCallback} from 'react';
import '../css/expenses-component.css'
import Expense from '../components/Expense';
import GlobalContext from '../user-context' ;
import Draggable from '../components/Draggable';
import { inRange, range} from 'lodash'


export const ExpensesSortableListview = (props) => {
    
    const sorting = props.sorting;
    const {account} = useContext(GlobalContext)
    






  

    return (
           
            <ul className="expensesListview">
                
                {/* {items.map(index => {
                    const isDragging = state.draggedIndex === index;

                    const draggedTop = state.order.indexOf(index) * (HEIGHT + 10)

                    const top = state.dragOrder.indexOf(index) * (HEIGHT + 10)

                    return (<Draggable key={index} id={index} onDrag={handleDrag} onDragEnd={handleDragEnd}>
                        <div style={styles} isDragging={isDragging} top={isDragging ? draggedTop : top}>
                        {index}
                        </div>
                    </Draggable>)
                })
                }  */}

                <div>
                    <p>No expenses here!</p>
                    <p> Add some with the + button on the upper right.</p>                    
                </div>

                {account.expenses.map((expense, index) => {

                   

                    return (<Draggable>
                        <Expense  key={expense.id} sorting={sorting} info={expense}/>
                    </Draggable>

                )})} 

            </ul>  
    )
}



export default ExpensesSortableListview;