import { Image, View, Text, StyleSheet } from "react-native";

export default function TotalTitle({ title, value }) {

    return (
        <View>
            <View style={styles.header}>
                <Image source={require('../../assets/images/ul.png')} style={styles.img}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <Text style={styles.text}>${value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 15,
        height: 15
    },
    text: {
        color: 'white',
        marginLeft: 23,
        fontSize: 20,
        letterSpacing: 4,

    },
    header: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        
    },

    headerText: {
        color: 'white',
        fontSize: 20,
        letterSpacing: 2
    }
})