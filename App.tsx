import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

import CounterScreen from './src/screens/CounterScreen';
import DashboardScreen from './src/screens/DashboardScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import ExpenseCategoryScreen from './src/screens/ExpenseCategoryScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const Drawernavigator = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name="home" />,
          }}
        />
        <Drawer.Screen
          name="Expense Type"
          component={ExpenseCategoryScreen}
          options={{
            drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name="options" />,
          }}
        />
        <Drawer.Screen
          name="CounterRTK"
          component={CounterScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons color={color} size={size} name="calculator" />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <Provider store={store}>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashbaord">
          <Stack.Screen
            name="Dashbaord"
            component={Drawernavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
