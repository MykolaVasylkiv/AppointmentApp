import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import InitialScreen from './InitialScreen';
import Slots from './Slots';
import CreateBook from './CreateBook';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={InitialScreen} />
        <Stack.Screen name="Slots" component={Slots} />
        <Stack.Screen name="CreateBook" component={CreateBook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
