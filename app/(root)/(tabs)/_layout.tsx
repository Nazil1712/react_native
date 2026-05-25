import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {Ionicons} from "@expo/vector-icons"

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name='index'
        options={{
          title:"Home",
          tabBarIcon:({color,size})=>(
            <Ionicons name='home' size={size} color={color}/>
          )
        }}
      />

      <Tabs.Screen 
        name='settings'
        options={{
          title:"Settings",
          tabBarIcon:({color,size})=>(
            <Ionicons name='settings' size={size} color={color}/>
          )
        }}
      />

      <Tabs.Screen 
        name='saved'
        options={{
          title:"Saved",
          tabBarIcon:({color,size})=>(
            <Ionicons name='heart' color={color} size={size}/>
          )
        }}
      />

      <Tabs.Screen 
        name='profile'
        options={{
          title: "Profile",
          tabBarIcon:({color,size})=>(
            <Ionicons name='person' color={color} size={size}/>
          )
        }}
      />
    </Tabs>
  )
}