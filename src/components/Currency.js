import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    
    const handleChange = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    };

    return (
        <div class="alert alert-success" >
            <label >
                Currency
            </label>
            <select class="form-select  alert alert-success"
                onChange={(e) => handleChange(e.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>

    )
}

export default Currency