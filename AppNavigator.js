import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import HomeScreen from './screens/HomeScreen';
import VehicleListScreen from './screens/VehicleListScreen';
import AddEditVehicleScreen from './screens/AddEditVehicleScreen';
import VehicleDetailsScreen from './screens/VehicleDetailsScreen';
import OBDConnectionScreen from './screens/OBDConnectionScreen';
import OBDDataScreen from './screens/OBDDataScreen';
// import DashboardScreen from './screens/DashboardScreen';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'VehicleList') {
            iconName = focused ? 'car' : 'car-outline';
          } else if (route.name === 'AddEditVehicle') {
            iconName = focused ? 'add' : 'add-outline';
          } 
          else if (route.name === 'OBDConnection') {
            iconName = focused ? 'bluetooth' : 'bluetooth-outline';
          } else if (route.name === 'OBDData') {
            iconName = focused ? 'speedometer' : 'speedometer-outline';
          }

          // Return the appropriate icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      tabBarStyle={{
        display: 'flex',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="VehicleList" component={VehicleListScreen} />
      <Tab.Screen name="AddEditVehicle" component={AddEditVehicleScreen} />
      <Tab.Screen name="OBDConnection" component={OBDConnectionScreen} />
      <Tab.Screen name="OBDData" component={OBDDataScreen} />
      {/* <Tab.Screen name="Dashboard" component={DashboardScreen} /> */}
      
      {/* ... add other screens */}
    </Tab.Navigator>
  );
};

export default AppNavigator;

