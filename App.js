import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from './screens/Chat';

const Stack = createStackNavigator();


function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Chat} name={'Chatas'}/>
    </Stack.Navigator>
  )
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <ChatStack></ChatStack>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <RootNavigator />
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
