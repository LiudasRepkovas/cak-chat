import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RecoilRoot, useRecoilState } from "recoil";

import Chat from "./screens/Chat";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import { userAtom } from "./state/recoil";

const Stack = createStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Chat} name={"Chat"} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Login} name={"Login"} />
      <Stack.Screen component={Signup} name={"Signup"} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  return (
    <NavigationContainer>
      {showLoginOrChat()}
    </NavigationContainer>
  );
}

function showLoginOrChat() {

  const [user, setUser] = useRecoilState(userAtom);

  if(user) {
    return <ChatStack></ChatStack>
  } else {
    return <AuthStack></AuthStack>
  }
}

export default function App() {
  return (
  <RecoilRoot>
    <RootNavigator />
  </RecoilRoot>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
