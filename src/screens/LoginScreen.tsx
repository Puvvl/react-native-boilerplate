import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import {
  loginWithEmail,
  loginWithGoogle,
  loginWithApple,
} from "@services/auth";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "@navigation/types";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "Login"
>;

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<LoginScreenNavigationProp>();

  // Handle email/password login
  const handleEmailLogin = async () => {
    try {
      await loginWithEmail(email, password);
      Alert.alert("Login successful");
    } catch (error) {
      console.error("Email Login Error:", error);
      Alert.alert("Failed to login with email and password");
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      Alert.alert("Google login successful");
    } catch (error) {
      console.error("Google Login Error:", error);
      Alert.alert("Failed to login with Google");
    }
  };

  // Handle Apple login
  const handleAppleLogin = async () => {
    try {
      await loginWithApple();
      Alert.alert("Apple login successful");
    } catch (error) {
      console.error("Apple Login Error:", error);
      Alert.alert("Failed to login with Apple");
    }
  };

  return (
    <View style={styles.container}>
      {/* Email and Password Login */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login with Email" onPress={handleEmailLogin} />

      {/* Google Login */}
      <Button title="Login with Google" onPress={handleGoogleLogin} />

      {/* Apple Login */}
      <Button title="Login with Apple" onPress={handleAppleLogin} />

      {/* Navigate to Register Screen */}
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default LoginScreen;
