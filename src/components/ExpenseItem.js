import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';


const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};
	return (
		<li className='list-group-item d-flex justify-content-between align-items-center' >
			     			      <div>{props.name}</div>
				  <div>£{props.cost}</div>
				  <div>{props.month}</div>						
				<TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>                	
		</li>
	);
};
export default ExpenseItem;