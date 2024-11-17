import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ReportFormScreen from './screens/ReportFormScreen';
import ReportDetailsScreen from './screens/ReportDetailsScreen';
import AddReportScreen from './screens/AddReportScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ReportForm" component={ReportFormScreen} />
        <Stack.Screen name="ReportDetails" component={ReportDetailsScreen} />
        <Stack.Screen name="AddReport" component={AddReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
