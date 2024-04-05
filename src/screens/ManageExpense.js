import { LinearGradient } from "expo-linear-gradient";
import { useContext, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/Style";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { ExpenseContext } from "../../store/expense-context";
import UpdateForm from "../components/UpdateForm";
import { getFormatDate } from "../util/date";


export default function ManageExpense({ route, navigation }) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;
    const expenseCtx = useContext(ExpenseContext);
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("");

    const handleDescription = (value) => {
        setDescription(value)
    }

    const handleAmount = (value) => {
        setAmount(value)
    }

    const handleType = (value) => {
        setType(value);
        console.log(type);
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        })
    }, [isEditing, navigation])

    const handleCancel = () => {
        navigation.goBack();
    }

    const handleConfirm = () => {
        if (isEditing) {
            expenseCtx.updateExpense(editedExpenseId, {
                description: description,
                amount: Number(amount),
                date: new Date(),
                type: type
            })
        } else {
            expenseCtx.addExpense({
                description: description,
                amount: Number(amount),
                date: new Date(),
                type: type
            })
        }
        navigation.goBack();
    }

    const handleDelete = () => {
        expenseCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    }
    return (

        <LinearGradient
            colors={['rgba(120, 0, 0, 1)', 'rgba(73, 0, 0, 0)']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}>
            <View style={styles.buttons}>
                <Button mode='flat' onPress={handleCancel}
                    style={styles.button}>Cancel</Button>
                <Button onPress={handleConfirm} style={styles.button}
                >{isEditing ? 'Update' : 'Add'}</Button>
            </View>
            <View style={styles.line}></View>

            <UpdateForm amount={amount} description={description}
                onSelect={(value) => handleType(value)}
                onSetAmount={(value) => handleAmount(value)}
                onSetDescription={(value) => handleDescription(value)} />
            {isEditing && (
                <View>
                    <IconButton icon="trash-can-outline"
                        color="red" size={36} onPress={handleDelete} />
                </View>
            )}
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    line: {
        width: '80%',
        height: 1, // Adjust the height of the line as needed
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 15
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    button: {
        minWidth: 120,
        marginHorizontal: 8
    }
})