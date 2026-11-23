import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { Home, UtensilsCrossed, ShoppingBag, User } from 'lucide-react-native'

const TABS = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'menu', label: 'Menu', icon: UtensilsCrossed },
  { key: 'cart', label: 'Cart', icon: ShoppingBag },
  { key: 'profile', label: 'Profile', icon: User },
] as const

function Nav() {
  const [activeTab, setActiveTab] = useState<string>('home')

  return (
    <View className="flex flex-row justify-around items-center w-full bg-white border-t border-gray-200 px-2 pt-2 pb-6">
      {TABS.map(({ key, label, icon: Icon }) => {
        const isActive = activeTab === key

        return (
          <Pressable
            key={key}
            onPress={() => setActiveTab(key)}
            className="flex-1 items-center justify-center gap-1 py-1"
          >
            <Icon size={22} color={isActive ? '#ea580c' : '#9ca3af'} />
            <Text
              className={
                isActive
                  ? 'text-xs font-semibold text-orange-600'
                  : 'text-xs text-gray-400'
              }
            >
              {label}
            </Text>
          </Pressable>
        )
      })}
    </View>
  )
}

export default Nav
