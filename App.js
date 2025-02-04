import * as React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

function HomeScreen() {
  return(
    <SafeAreaView style={ styles.container }>
      <View style={ styles.centeredView }>
        <Text style={ styles.text }> Home Screen </Text>
      </View>
    </SafeAreaView>
  )
}

function SettingsScreen() {
  return(
    <SafeAreaView style={ styles.container }>
      <View style={ styles.centeredView }>
        <Text style={ styles.text }> Settings Screen </Text>
      </View>
    </SafeAreaView>
  )
}

function ProfileScreen() {
  return(
    <SafeAreaView style={ styles.container }>
      <View style={ styles.centeredView }>
        <Text style={ styles.text }> Profile Screen </Text>
      </View>
    </SafeAreaView>
  )
}

const Tab = createBottomTabNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          component={ HomeScreen }
          options={
            { tabBarIcon: () => 
              <Ionicons
                name='home'
                size={24}
                color={"black"}
              />
            }
          }
        />

        <Tab.Screen
          name='Settings'
          component={ SettingsScreen }
          options={
            { tabBarIcon: () => 
              <Ionicons
                name='settings'
                size={24}
                color={"black"}
              />
            }
          }
        />

        <Tab.Screen
          name='Profile'
          component={ ProfileScreen }
          options={
            { tabBarIcon: () => 
              <Ionicons
                name='person'
                size={24}
                color={"black"}
              />
            }
          }
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})