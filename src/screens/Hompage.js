import { View, StyleSheet } from "react-native";
import { DUMMY_EXPENSES } from "../data/data";
import TotalCustom from "../components/TotalCustom";
import ExpenseList from "../components/ExpenseList";

export default function Homepage() {
    const expensesSum = DUMMY_EXPENSES.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0)
    return (
        <View style={styles.container}>
            <TotalCustom total={expensesSum.toFixed(2)} screen="All" title='Spent'/>
            <ExpenseList list={DUMMY_EXPENSES} />
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