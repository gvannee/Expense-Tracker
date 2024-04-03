import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/Style";
export default function RecentExpense() {

    return (
        <LinearGradient
            colors={[GlobalStyles.bgStart, GlobalStyles.bgEnd]}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}>
            <View>
                <Text>Recent Expense</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.bgScreen,
        flex: 1
    }
})