import { StatusBar } from 'expo-status-bar';
import React, {createContext, useState} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import { NativeBaseProvider } from 'native-base';
import RandomRestaurant from './components/RandomRestaurant'


const Stack = createNativeStackNavigator();
export const RestaurantContext = createContext();

export default function App() {
  const [restaurants, setRestaurants] = useState();
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <RestaurantContext.Provider value={{restaurants, setRestaurants}}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Random" component={RandomRestaurant} />
      </Stack.Navigator>
      </RestaurantContext.Provider>
      <StatusBar style="auto" />
    </NavigationContainer>
    </NativeBaseProvider>
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
