import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";


export default function ExpenseList({list}) {
    return(
        <FlatList data={list} 
        keyExtractor={(item) => item.id} 
        renderItem={({item}) => (<ExpenseItem amount={item.amount} date={item.date} description={item.description} itemType={item.type} />)}
        />

    )
}