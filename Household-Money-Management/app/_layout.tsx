import { Stack } from 'expo-router';
import React from 'react';

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: '(app)/index',
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(app)" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  );
}