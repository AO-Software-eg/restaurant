import { Image } from 'expo-image'
import { router } from 'expo-router'
import { ChevronRight, UtensilsCrossed } from 'lucide-react-native'
import { Pressable, Text, View } from 'react-native'

const HERO_IMAGE =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=warm%20cozy%20bistro%20interior%2C%20wooden%20table%20with%20plated%20gourmet%20pasta%20dish%2C%20candles%2C%20golden%20evening%20light%2C%20shallow%20depth%20of%20field%2C%20editorial%20food%20photography&image_size=portrait_16_9'

export default function Welcome() {
  return (
    <View className="flex-1">
      <Image
        source={{ uri: HERO_IMAGE }}
        className="absolute inset-0"
        contentFit="cover"
        transition={300}
      />

      <View className="absolute inset-0 bg-black/55" />

      <View className="flex-1 justify-end px-6 pb-14">
        <View className="h-16 w-16 items-center justify-center rounded-2xl bg-orange-600">
          <UtensilsCrossed size={30} color="#ffffff" />
        </View>

        <Text className="mt-6 text-4xl font-bold text-white">
          Welcome to Maison
        </Text>

        <Text className="mt-3 text-base leading-6 text-white/80">
          Browse local favourites, explore the menu and book your table in a few
          taps.
        </Text>

        <Pressable
          onPress={() => router.replace('/home')}
          className="mt-10 h-14 flex-row items-center justify-center gap-2 rounded-full bg-orange-600 active:bg-orange-700"
        >
          <Text className="text-base font-semibold text-white">Get Started</Text>
          <ChevronRight size={20} color="#ffffff" />
        </Pressable>

        <Pressable
          onPress={() => router.replace('/home')}
          className="mt-3 h-12 items-center justify-center"
        >
          <Text className="text-sm text-white/70">
            I already have an account
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
