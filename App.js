import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
//Screens
import ChooseLocation from './src/Screens/ChooseLocation';
import Home from './src/Screens/Home';


const App = () => {
  const Stack = createNativeStackNavigator ();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="chooseLocation" component={ChooseLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;