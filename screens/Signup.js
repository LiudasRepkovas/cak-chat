import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = async () => {
      if(email !== '' && password !== '') {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            alert('Account created successfuly!');
            console.log(result);
            navigation.navigate('Login')

        } catch(error) {
            alert('Could not create account!');
            console.log(error);
        } 
        
      }
  }

  const onGoToLogin = () => {
    navigation.navigate('Login')
  }

  const handleEmailTextChange = (newText) => {
      setEmail(newText)
  }

  return (
    <View>
      <Text>Sign up!</Text>
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
      <Button onPress={handleCreateAccount} title="Create account" />
      <Button 
        onPress={onGoToLogin}
      title="Go to Login" />
    </View>
  );
}
