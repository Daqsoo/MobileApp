import { View, Text, Image } from 'react-native';
import React from 'react';
import { useFonts, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '@/styles/onboarding/onboarding';

export default function OnBoardingScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient
      colors={['#e5ecf9', '#f6f7f9']}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.firstContainer}>
        <View>
          <Image style={styles.logo} source={require('@/assets/logo.png')} />
        </View>
      </View>
    </LinearGradient>
  );
}
