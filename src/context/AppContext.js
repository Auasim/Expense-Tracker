import React, { createContext, useReducer } from 'react';
const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
			
		default:
			return state;
	}
};

const initialState = {
	budget: 15000,
	expenses: [
		{ id: 1, name: 'Shopping', cost: 40 , month:'January'},
		{ id: 2, name: 'Grocery', cost: 400 ,month:'February'},
		{ id: 3, name: 'Bike service', cost: 50,month:'March' },
	],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};