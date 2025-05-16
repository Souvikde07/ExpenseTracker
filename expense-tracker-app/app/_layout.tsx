import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { AuthProvider } from '@/contexts/AuthContext'

const StackLayout = () => {
  return <Stack screenOptions={{headerShown: false }}></Stack>;
}

export default function Rootlayout(){
  return(
    <AuthProvider>
      <StackLayout />
    </AuthProvider>
  )
}

const styles = StyleSheet.create({})