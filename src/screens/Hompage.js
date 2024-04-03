import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/Style";
import { LinearGradient } from "expo-linear-gradient";
import ExpenseItem from "../components/ExpenseItem";
import { DUMMY_EXPENSES } from "../data/data";
import TotalCustom from "../components/TotalCustom";
import ExpenseList from "../components/ExpenseList";

export default function Homepage() {
    console.log(DUMMY_EXPENSES[0]);
    return (
        // <LinearGradient
        //     colors={[GlobalStyles.bgStart, GlobalStyles.bgEnd]}
        //     style={styles.container}
        //     start={{ x: 0, y: 0 }}
        //     end={{ x: 0, y: 1 }}
        // >
        //     <View style={styles.content}>
        //         <Text>Homepage</Text>
        //     </View>
        // </LinearGradient>
        <View style={styles.test}>
            <TotalCustom total={20.99} screen="Total"/>
            {/* <ExpenseItem expense={DUMMY_EXPENSES[2]} />
            <ExpenseItem expense={DUMMY_EXPENSES[0]} /> */}
            <ExpenseList list={DUMMY_EXPENSES} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.bgScreen,
        flex: 1
    },
    test: {
        backgroundColor: '#1F1313',
        flex: 1,
        padding: 24
    }
})