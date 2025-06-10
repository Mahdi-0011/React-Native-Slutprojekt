import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'
import Startpage from '../Pages/Startpage'
import Searchpage from '../Pages/Searchpage'
import Favoritepage from '../Pages/Favoritepage'

const Tab = createBottomTabNavigator()

function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Movie app'
        component={Startpage}
        options={{
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