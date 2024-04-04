import { Pressable, StyleSheet, Text, View, } from 'react-native'
import React, { Component, useEffect } from 'react'
import VehicleListView from './VehicleListView';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import AddVehicleView from './AddVehicleView';
import ProfileView from './ProfileView';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './HomeView';
import EditVehicleView from './EditVehicleView';
import OrderDetailView from './OrderDetailView';
import VehicleDetailsView from './VehicleDetailsView';

const Tab = createBottomTabNavigator();


const MainView = ({ navigation, route }) => {

    const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={HomeView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddVehicle"
          component={AddVehicleView}
          options={{ title: "Add Vehicle" }}
        />
        <Stack.Screen
          name="VehicleDetails"
          component={VehicleDetailsView}
          options={{ title: "Car Details" }}
        />

        <Stack.Screen
          name="EditVehicle"
          component={EditVehicleView}
          options={{ title: "Edit Vehicle" }}
        />
        <Stack.Screen
          name="OrderDetail"
          component={OrderDetailView}
          options={{ title: "Order Detail" }}
        />
      </Stack.Navigator>
    );
}

export default MainView


