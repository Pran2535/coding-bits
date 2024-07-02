import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import LoginScreen from "../components/LoginScreen";
import * as SecureStore from "expo-secure-store";

const tokenCache = {
  getToken(key) {
    return SecureStore.getItemAsync(key).catch(() => null);
  },
  saveToken(key, value) {
    return SecureStore.setItemAsync(key, value).catch(() => null);
  },
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Or a loading spinner if you want
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SignedIn>
      <SignedOut>
        <LoginScreen />
      </SignedOut>
    </ClerkProvider>
  );
}
fyhf 