import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import VehicleListScreen from './screens/VehicleListScreen';
import AddEditVehicleScreen from './screens/AddEditVehicleScreen';
import OBDConnectionScreen from './screens/OBDConnectionScreen';
import OBDDataScreen from './screens/OBDDataScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'HomeTab':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'VehicleListTab':
              iconName = focused ? 'car' : 'car-outline';
              break;
            case 'AddVehicleTab':
              iconName = focused ? 'add-circle' : 'add-circle-outline';
              break;
            case 'ConnectionTab':
              iconName = focused ? 'bluetooth' : 'bluetooth-outline';
              break;
            case 'DataTab':
              iconName = focused ? 'speedometer' : 'speedometer-outline';
              break;
            default:
              iconName = 'alert-circle-outline';
          }

          return <Ionicons name={iconName} size={size + 4} color={color} style={{ padding: 5 }} />;
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      })}
      tabBarOptions={{
        activeTintColor: '#4CAF50',
        inactiveTintColor: '#888888',
        style: {
          backgroundColor: '#1e1e1e',
          borderTopWidth: 0,
          height: 60,
          shadowOpacity: 0.1,
        },
      }}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="VehicleListTab" component={VehicleListScreen} options={{ tabBarLabel: 'Vehicle List' }} />
      {/* <Tab.Screen name="AddVehicleTab" component={AddEditVehicleScreen} options={{ tabBarLabel: 'Add Vehicle' }} /> */}
      <Tab.Screen name="ConnectionTab" component={OBDConnectionScreen} options={{ tabBarLabel: 'Connection' }} />
      <Tab.Screen name="DataTab" component={OBDDataScreen} options={{ tabBarLabel: 'Data' }} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
