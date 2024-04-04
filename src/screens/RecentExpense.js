import { View, Text, StyleSheet } from "react-native";
import TotalCustom from "../components/TotalCustom";
import { DUMMY_EXPENSES } from "../data/data";
import ExpenseList from "../components/ExpenseList";
export default function RecentExpense() {
    const today = new Date();
    const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

    const filteredExpenses = DUMMY_EXPENSES.filter(expense => {
        // Check if expense date is greater than or equal to one week ago
        return expense.date >= oneWeekAgo;
    });

    const expensesSum = filteredExpenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0)

    console.log(filteredExpenses);

    return (
        <View style={styles.container}>
            <TotalCustom total={expensesSum} screen="Total" title='Last 7 days' />
            <ExpenseList list={filteredExpenses} />
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