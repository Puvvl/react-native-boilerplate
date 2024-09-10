import { logout } from "@services/auth";
import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

const ProfileScreen: React.FC = () => {
  const handleLogout = async () => {
    try {
      await logout();
      Alert.alert("Logout successful");
    } catch (error) {
      console.error("Logout Error:", error);
      Alert.alert("Failed to logout");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
