import { StyleSheet, Text, View } from "react-native"
import TotalTitle from "./TotalTitle"
import { LinearGradient } from "expo-linear-gradient"

export default function TotalCustom({ screen, total }) {

    return (
        <LinearGradient colors={['rgba(120, 0, 0, 1)', 'rgba(73, 0, 0, 0.5)']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}>
            <TotalTitle title='Available Balance' value={20000 - total} />
            <View style={styles.line}></View>
            <TotalTitle title='Spent' value={total} />

            {/* <Text style={styles.text}>{screen}</Text>
            <Text style={styles.text}>{total}</Text> */}
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'col',
        justifyContent: "space-between",
        padding: 20,
        borderRadius: 30
    },

    line: {
        width: '95%',
        height: 1, // Adjust the height of the line as needed
        backgroundColor: 'rgba(255, 255, 255, 0.17)',
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 15
    },

    text: {
        color: 'white',
    }
})