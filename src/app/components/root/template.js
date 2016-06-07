import React from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import * as rawStyles from './styles'

// Create React Native stylesheet from style data
const styles = StyleSheet.create(rawStyles)

// OS text to display
const OS = Platform.select({ios: 'iOS', android: 'Android'})

/**
 * Render root component representing the entire application
 * @return {ReactElement} Root component
 */
export default function Root() {
  return (
    <View style={styles.CONTAINER}>
      <Text style={styles.TEXT}>Welcome to {OS}</Text>
    </View>
  )
}
