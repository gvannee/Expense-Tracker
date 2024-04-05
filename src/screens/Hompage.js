import { View, StyleSheet } from "react-native";
import { DUMMY_EXPENSES } from "../data/data";
import TotalCustom from "../components/TotalCustom";
import ExpenseList from "../components/ExpenseList";
import { useContext, useEffect } from "react";
import { ExpenseContext } from "../../store/expense-context";

export default function Homepage() {
    const expenseCtx = useContext(ExpenseContext);
    const expensesSum = expenseCtx.expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0)

    
    return (
        <View style={styles.container}>
            <TotalCustom total={expensesSum.toFixed(2)} screen="All" title='Spent'/>
            <ExpenseList list={expenseCtx.expenses} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F1313',
        flex: 1,
        padding: 24
    }
})