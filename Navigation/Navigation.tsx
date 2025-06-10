import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text, StyleSheet } from 'react-native'
import Startpage from '../Pages/Homepage'
import Searchpage from '../Pages/Searchpage'
import Favoritepage from '../Pages/Favoritepage'

const Tab = createBottomTabNavigator()

function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
        },
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        tabBarActiveTintColor: 'white',
      }}>
      <Tab.Screen
        name='Movie app'
        component={Startpage}
        options={{
          title: 'Home',
          headerTitle: 'Movie App',
          tabBarIcon: () => (
            <View>
              <Text>🏠</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen 
      name='Search'
      component={Searchpage} 
      options={{
        headerTitle: 'Movie App',
        tabBarIcon: () => (<View>
          <Text>
            🔍
          </Text>
           </View>),
      }}
      />
      <Tab.Screen 
      name='Favorite' 
      component={Favoritepage} 
      options={{
        tabBarIcon: () => (
          <View>
            <Text>❤️</Text>
          </View>
        ),
      }}
      />
    </Tab.Navigator>
  )
}

export default Navigation


const styles = StyleSheet.create({

})