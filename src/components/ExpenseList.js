import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";


export default function ExpenseList({list}) {
    const renderExpenseItem = (item) => {
        return <ExpenseItem {...item.item} />
    }
    return(
        <FlatList data={list} 
        keyExtractor={(item) => item.id} 
        renderItem={renderExpenseItem}
        />

    )
}