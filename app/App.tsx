import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import OnboardingScreen from './src/screens/OnboardingScreen/OnboardingScreen'

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <OnboardingScreen />
      </View>
    </SafeAreaView>
  )
}

export default App