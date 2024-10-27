import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '@/constants'
import InputField from '@/components/InputField'
import CustomBtn from '@/components/CustomBtn'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Link } from 'expo-router'
import OAuth from '@/components/OAuth'

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const handleSignin = (e: any) => {
    try {
      
    } catch (err) {
      
    }
  }
  return (
    <ScrollView className='flex-1 bg-white'>
      <GestureHandlerRootView>

      <View className='flex-1 bg-white'>

        {/* Top image */}
        <View className='relative w-full h-[250px]'>
          <Image source={images.signUpCar} className='z-0 w-full h-[250px]' />
          <Text className='text-2xl text-black font-JakartaBold text-center absolute bottom-10 left-44 capitalize'>Welcome 👋</Text>
        </View>

        {/* Input Fields */}
        <View className='p-5'>

          <InputField 
          label="Email"
          placeholder="Enter email"
          icon={icons.email}
          value={values.email}
          onChangeText = {(value: any) => setValues({...values, email: value})}
          />

          <InputField 
          label="Password"
          placeholder="Enter your password"
          icon={icons.lock}
          value={values.password}
          secureTextEntry={true}
          onChangeText = {(value: any) => setValues({...values, password: value})}
          />

          <CustomBtn onPress={handleSignin} title='Sign In' className='mt-6' />

          <OAuth />

          <Link href="/(auth)/sign-up" className='text-lg text-center text-general-800 mt-5' >
            <Text>Don't have an account? </Text>
            <Text className='text-primary-500'>Register</Text>
          </Link>

        </View>

      </View>
      </GestureHandlerRootView>
    </ScrollView>
  )
}

export default Signin