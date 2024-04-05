import { StyleSheet, View, Text } from "react-native";
import Input from "./UI/Input";
import RNPickerSelect from 'react-native-picker-select'



export default function UpdateForm({ value, onSetDescription, onSetAmount, onSelect, description, amount }) {
    const types = [
        {
            label: "Food",
            value: 'food'
        },
        {
            label: "Accessory",
            value: 'accessory'
        },
        {
            label: "Study",
            value: 'study'
        },
    ];
    return (
        <View style={styles.container}>
            <Input onChange={onSetDescription} value={description} title="Description" />
            <Input onChange={onSetAmount} value={amount} title="Amount" />
            <View style={styles.type}>
                <Text style={styles.text}>Type</Text>
                <RNPickerSelect items={types} 
                onValueChange={onSelect} style={styles.select}/>
            </View>


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    text: {
        paddingRight: 10,
        fontSize: 15,
        color: 'white'
    },

    type: {
        gap: 10,
        paddingTop: 10,
    },

});