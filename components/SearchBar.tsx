import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface props {
    placeholder: string;
    onPress?: () => void;
    value ?: string;
    onChangeText?: (text:string) =>  void;
}

const SearchBar = ({placeholder, onPress, value, onChangeText}: props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="w-5 h-5"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />

      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor= "#a8b5db"
        className='flex-1 ml-2 text-white'
      />
    </View>
  )
}

export default SearchBar