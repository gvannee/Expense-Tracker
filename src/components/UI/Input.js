import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Input({ value, onChange, title }) {
    return (
        <View style={styles.containter}>
            <Text style={styles.text}>{title}</Text>
            <TextInput style={styles.input} onChangeText={onChange} value={value} />
        </View>
        
    )
}

const styles = StyleSheet.create({
    containter: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,

    },

    input: {
        width: '50%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'white'
    },

    text: {
        color: 'white',
        fontSize: 16
    }
});