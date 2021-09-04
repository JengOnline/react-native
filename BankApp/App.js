import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
import BottomBarScreen from './src/screens/Home/BottomBarScreen';
import CardDetailScreen from './src/screens/Cards/CardDetailScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="BottomBar"
          component={BottomBarScreen}
        />
        <Stack.Screen
          options={{
            headerBackTitle: 'Home',
            headerTintColor: '#E42C66',
            title: 'Cards',
            headerTitleColor: 'white',
            headerStyle:{
              backgroundColor: '#000',
            }
          }}
          name="CardDetail"
          component={CardDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
