import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Typo from '@/components/Typo'

const Welcome = () => {
  return (
    <ScreenWrapper>
      <Typo size={30} fontWeight={"700"} color='red'>
        Welcome Page
      </Typo>
        
    </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({})