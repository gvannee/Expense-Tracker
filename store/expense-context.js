import { createContext, useReducer } from "react";
import { DUMMY_EXPENSES } from "../src/data/data";


export const ExpenseContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date, type }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date, type }) => { }
})
function ExpenseReducer(state, action) {
    switch (action.check) {
        case 'ADD':
            const id = new Date() + Math.random().toString();
            return [{...action.payload, id: id}, ...state];
        case 'UPDATE':
            const updateExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updatableExpense = state[updateExpenseIndex];
            const updatedItem = {...updatableExpense, ...action.payload.data}
            const updatedExpense = [...state];
            updatedExpense[updateExpenseIndex] = updatedItem;
            return updatedExpense
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload)
        default:
            return state;

    }
}
function ExpenseContextProvider({ children }) {
    const [expenseState, dispatch] = useReducer(ExpenseReducer, DUMMY_EXPENSES);

    function addExpense( expenseData ) {
        dispatch({ check: 'ADD', payload: expenseData });
    }

    function deleteExpense(id) {
        dispatch({ check: 'DELETE', payload: id });
    }

    function updateExpense(id, expenseData ) {
        dispatch({ check: 'UPDATE', payload: {id: id, data: expenseData} });
    }

    const value = {
        expenses: expenseState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    }

    return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
}

export default ExpenseContextProvider;