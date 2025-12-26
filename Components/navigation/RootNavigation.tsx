import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../Pages/WelcomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from './types';
import HomeScreen from '../Pages/HomeScreen';
import BulkFuelsHome from '../Pages/BulkFuelsHome';
import FuelsHome from '../Pages/FuelsHome';
import IndustialLiquids from '../Pages/IndustialLiquids';
import IndustrialHome from '../Pages/IndustrialHome';
import IndustrialScreen from '../Pages/IndustrialScreen';
import InfoScreen from '../Pages/InfoScreen';
import LoginScreen from '../Pages/LoginScreen';
import LPGScreen from '../Pages/LpgScreen';
import LubricantsScreen from '../Pages/LubricantsScreen';
import LubricantsHome from '../Pages/LubricantsHome';
import SolventsHome from '../Pages/SolventsHome';
import SupportScreen from '../Pages/SupportScreen';
import ProductFinder from '../Assests/Common/ProductFinder';
import KnowledgeCenter from '../Assests/Common/KnowledgeCenter';
import InteractiveTools from '../Assests/Common/InteractiveTools';
import SelectedData from '../Assests/Common/SelectedData';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BulkFuelsHome"
          component={BulkFuelsHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FuelsHome"
          component={FuelsHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IndustialLiquids"
          component={IndustialLiquids}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IndustrialHome"
          component={IndustrialHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IndustrialScreen"
          component={IndustrialScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InfoScreen"
          component={InfoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LpgScreen"
          component={LPGScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LubricantsScreen"
          component={LubricantsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LubricantsHome"
          component={LubricantsHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SolventsHome"
          component={SolventsHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SupportScreen"
          component={SupportScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductFinder"
          component={ProductFinder}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="KnowledgeCenter"
          component={KnowledgeCenter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InteractiveTools"
          component={InteractiveTools}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectedData"
          component={SelectedData}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default RootNavigator;
