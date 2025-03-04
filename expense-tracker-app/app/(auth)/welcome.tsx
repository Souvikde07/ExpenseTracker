import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { Colors } from 'react-native/Libraries/NewAppScreen'
const Welcome = () => {
  return (
    <ScreenWrapper>
      <Text style={{color: "white"}}>Welcome</Text>
    </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({})