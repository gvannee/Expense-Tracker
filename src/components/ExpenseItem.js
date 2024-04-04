import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/Style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getFormatDate } from "../util/date";
import { useNavigation } from "@react-navigation/native";


export default function ExpenseItem({ id, itemType, description, amount, date }) {
    const navigation = useNavigation();
    const loadIcon = (type) => {
        if (type == 'study') {
            return 'book-open-variant';
        } else if (type == 'accessory') {
            return 'tshirt-crew';
        } else {
            return 'food';
        }
    }

    return (
        <Pressable onPress={() => navigation.navigate('ManageExpense', {expenseId: id})}>
            <LinearGradient colors={[GlobalStyles.bgStart, GlobalStyles.bgEnd]}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}>
                <View style={styles.left}>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons name={loadIcon(itemType)} color='white' size={25} />
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.title}>{description}</Text>
                        <Text style={styles.text}>{getFormatDate(date)}</Text>
                    </View>
                </View>
                <View style={styles.price}>
                    <Text style={styles.txtPrice}>${amount}</Text>
                </View>





            </LinearGradient>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 14,
        borderRadius: 30,
        marginTop: 10,
    },

    left: {
        flexDirection: 'row',
        gap: 15
    },

    icon: {
        width: 50,
        height: 50,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#232323'
    },

    info: {
        justifyContent: 'center',
        gap: 5
    },

    text: {
        color: 'white',
        fontWeight: '300'
    },

    title: {
        color: 'white',
        fontWeight: '500',
        fontSize: 15
    },

    price: {
        justifyContent: 'center'
    },

    txtPrice: {
        fontSize: 18,
        color: 'white'
    }
})