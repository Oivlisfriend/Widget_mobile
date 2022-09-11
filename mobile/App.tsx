import 'react-native-gesture-handler';
import { Inter_400Regular, Inter_500Medium, useFonts } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from 'react-native';
import Widget from './src/components/Widget';
import { theme } from './src/theme';
import React from 'react';

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>

      <StatusBar style="light"
        backgroundColor="transparent"
        translucent />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <Widget />
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  );
}
