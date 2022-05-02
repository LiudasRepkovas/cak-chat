import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { userAtom } from "../state/recoil";
import { useRecoilState } from "recoil";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useRecoilState(userAtom)

  const handleLogin = async () => {
    if (email !== "" && password !== "") {
      try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");

        console.log(result);
        setUser(result.user)
      } catch (error) {
        alert("Login failed!");
        console.log(error);
      }
    }
  };

  const onSignup = () => {
    navigation.navigate("Signup");
  };

  const handleEmailTextChange = (newText) => {
    setEmail(newText);
  };

  return (
    <View>
      <Text>Welcome back!</Text>
      <TextInput
        placeholder="Enter email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={handleEmailTextChange}
      />
      <TextInput
        placeholder="Enter password"
        autoCapitalize="none"
        secureTextEntry="true"
        keyboardType="email-address"
        textContentType="password"
        autoFocus={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button onPress={handleLogin} title="Log in!" />
      <Button onPress={onSignup} title="Sign up!" />
    </View>
  );
}
