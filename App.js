import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExpenseOverview from './src/navigation/BottomNav';
import ManageExpense from './src/screens/ManageExpense';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: 'rgba(120, 0, 0, 1)', // Set background color to transparent
            
          }
        }}>
          <Stack.Screen name='Home' component={ExpenseOverview}
            options={{
              headerShown: false,
            }} />
            <Stack.Screen name='ManageExpense' component={ManageExpense}
             />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
