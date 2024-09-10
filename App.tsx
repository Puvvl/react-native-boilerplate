import React, { useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { registerForPushNotificationsAsync } from "@services/notifications";
import * as Notifications from "expo-notifications";
import AuthNavigator from "@navigation/AuthNavigator";
import MainNavigator from "@navigation/MainNavigator";
import { useSession, SessionProvider } from "@contexts/SessionContext";
import { Text } from "react-native";

export default function App() {
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    // Register for push notifications
    registerForPushNotificationsAsync();

    // Listener when notification received in foreground
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log("Notification Received:", notification);
      });

    // Listener when user interacts with notification
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("Notification Response:", response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current!,
      );
      Notifications.removeNotificationSubscription(responseListener.current!);
    };
  }, []);

  return (
    <SessionProvider>
      <NavigationContainer>
        <RenderApp />
      </NavigationContainer>
    </SessionProvider>
  );
}

const RenderApp = () => {
  const { user, loading } = useSession();
  if (loading) {
    return <Text>Loading...</Text>; // Add loading spinner if needed
  }
  return user ? <MainNavigator /> : <AuthNavigator />;
};
