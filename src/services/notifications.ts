import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

// Configure notification handling
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const registerForPushNotificationsAsync = async () => {
  let token;

  // Request notification permissions
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  // If not already granted, request permission
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  // If permission not granted, exit
  if (finalStatus !== "granted") {
    alert("Failed to get push token for push notifications!");
    return;
  }

  // Get the push token with projectId
  token = (
    await Notifications.getExpoPushTokenAsync({
      projectId: Constants.manifest2?.extra?.eas?.projectId,
    })
  ).data;
  console.log("Push Notification Token:", token);

  // Save the token (use your own API or storage as needed)
  await AsyncStorage.setItem("pushToken", token);

  return token;
};
