
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Page1 from './src/page/onboard_1'
import Page2 from './src/page/onboard_2'
import Page3 from './src/page/onboard_3'
import Page4 from './src/page/onboard_4'
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboard-1" component={Page1} />
        <Stack.Screen name="Onboard-2" component={Page2} />
        <Stack.Screen name="Onboard-3" component={Page3} />
        <Stack.Screen name="Onboard-4" component={Page4} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App

