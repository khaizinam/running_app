import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
//import FlashMessage from 'react-native-flash-message';

//Screens
import ChooseLocation from './src/Screens/ChooseLocation';
import Home from './src/Screens/Home';
import Welcome from './src/Screens/Welcome';
import Onboarding1 from './src/Screens/Onboarding1';
import Onboarding2 from './src/Screens/Onboarding2';
import Onboarding3 from './src/Screens/Onboarding3';
const Stack = createNativeStackNavigator ();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ChooseLocation" component={ChooseLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;