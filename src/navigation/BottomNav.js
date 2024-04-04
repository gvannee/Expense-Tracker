
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../screens/Hompage';
import RecentExpense from '../screens/RecentExpense';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import IconButton from '../components/UI/IconButton';

const BottomTabs = createBottomTabNavigator();
export default function ExpenseOverview() {
    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen name="AllExpense" component={Homepage}
                options={({navigation}) => (
                    {
                        title: "All Expense",
                        tabBarLabel: 'All',
                        tabBarActiveBackgroundColor: 'white',
                        tabBarStyle: {backgroundColor: 'rgba(120, 0, 0, 1)'},
                        tabBarActiveTintColor: 'rgba(120, 0, 0, 1)',
                        tabBarInactiveTintColor: 'white',
                        headerStyle: {
                            backgroundColor: 'rgba(116, 7, 7, 1)'
                        },
                        headerTintColor: 'white',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name='home-edit' color= {color} size={size} />
                        ),
                        headerRight: ({tintColor}) => (
                            <IconButton icon="plus" size={24} color={tintColor}
                            onPress={() => {navigation.navigate('ManageExpense')}}/>
                        )
    
                    }
                )} />
            <BottomTabs.Screen name='RecentExpense' component={RecentExpense}
                options={{
                    title: 'Recent Expense',
                    tabBarLabel: 'Recent',
                    tabBarInactiveTintColor: 'white',
                    headerStyle: {
                        backgroundColor: 'rgba(120, 0, 0, 1)'
                    },
                    headerTintColor: 'white',
                    tabBarActiveBackgroundColor: 'white',
                    tabBarStyle: {backgroundColor: 'rgba(120, 0, 0, 1)'},
                    tabBarActiveTintColor: 'rgba(120, 0, 0, 1)',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='calendar' color={color} size={size} />
                    ),
                    
                }} />
        </BottomTabs.Navigator>
    )
}