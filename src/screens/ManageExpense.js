import { LinearGradient } from "expo-linear-gradient";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/Style";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";


export default function ManageExpense({ route, navigation }) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        })
    }, [isEditing, navigation])

    const handleCancel = () => {
        navigation.goBack();
    }

    const handleConfirm = () => {
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
                >{isEditing ? 'Update' : 'Upload'}</Button>
            </View>
            <View style={styles.line}></View>
            {isEditing && (
                <View>
                    <IconButton icon="trash-can-outline"
                        color="red" size={36} />
                </View>
            )}
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        alignItems: 'center'
    },

    button: {
        minWidth: 120,
        marginHorizontal: 8
    }
})