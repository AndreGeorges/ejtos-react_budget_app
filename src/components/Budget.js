
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);  
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (value) => {
         if ( value > 20000 ){
             alert("you have reached the upper limit of 20,000");
         }
         else if (value > totalExpenses) {
        setNewBudget(value);
         } else {
             alert("The value cannot be lower than the amount spent so far: " + totalExpenses);
         }
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={(e) => handleBudgetChange(e.target.value)}></input>
        </div>
    );
};
export default Budget;
