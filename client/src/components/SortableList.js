import React, {useContext, useState, useCallback, useEffect} from 'react';
import '../css/expenses-component.css'
import Expense from '../components/Expense';
import GlobalContext from '../user-context' ;
import Draggable from '../components/Draggable';
import {inRange, range} from 'lodash'
import '../css/draggable.css'

const HEIGHT = 148;

export const SortableList = (props) => {

    const sorting = props.sorting;

    const {account} = useContext(GlobalContext)

    const items = range(account.expenses.length);

    const [state, setState] = useState({
        order: items,
        dragOrder: items,
        draggedIndex: null
    })

    
    const draggableStyles = {
        transition: props.isDragging ? 'none' : 'all 500ms',
        top: `${props.top}px`,
        position: 'absolute'
    }


    const handleDrag =  useCallback(({translation, id}) => {
        const delta = Math.round(translation.y / HEIGHT);
        const index = state.order.indexOf(id);
        const dragOrder = state.order.filter(index => index !== id);

        if(!inRange(index + delta, 0, items.length)){
            return;
        }
        dragOrder.splice(index + delta, 0, id);
        setState(state => ({
            ...state,
            draggedIndex: id,
            dragOrder
        }));
    }, [state.order, items.length])


    const handleDragEnd =  useCallback(() => {


        setState(state => ({
            ...state,
            order: state.dragOrder,
            draggedIndex: null
        }));

    }, []);


    const collectOrder = () => {

        


    }




    return (
                
        <ul className="expensesListview">
                    
                {account.expenses.map((expense, index) => {

                    // const isDragging = state.draggedIndex === index;
                    // const draggedTop = state.order.indexOf(index) * (HEIGHT + 2);
                    // const top = state.dragOrder.indexOf(index) * (HEIGHT );

                    return (
                        <Draggable key={index} id={index}  onDrag={handleDrag} onDragEnd={handleDragEnd}>
                            {/* <Expense key={expense.id} sorting={sorting} info={expense} isDragging={isDragging} top={isDragging ? draggedTop : top} /> */}
                        </Draggable>
                        )
                    })
                    } 
        </ul>

    )

}

export default SortableList;