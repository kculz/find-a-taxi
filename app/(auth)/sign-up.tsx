import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '@/constants'
import InputField from '@/components/InputField'
import CustomBtn from '@/components/CustomBtn'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Link, router } from 'expo-router'
import OAuth from '@/components/OAuth'
import { useSignUpMutation } from '../redux/slices/api'

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [signUp, { isLoading, isError, error }] = useSignUpMutation();

  const handleSignUp = async () => {
    try {
      const res = await signUp(values).unwrap();
      if (!res.success) {
        Alert.alert("Sign-up Error!", res.message || "Signing failed. Please try again", [
          { text: 'Cancel', style: 'cancel' }
        ]);
      } else {
        Alert.alert("Success!", "Account created successfully.", [
          { text: "OK", onPress: () => router.replace('/(auth)/sign-in') }
        ]);
      }
    } catch (err) {
      Alert.alert("Unexpected Error", err.message || "An unexpected error occurred.");
      console.error("Error during sign up:", err); // Log error to console
    }
  };
  return (
    <ScrollView className='flex-1 bg-white'>
      <GestureHandlerRootView>

      <View className='flex-1 bg-white'>

        {/* Top image */}
        <View className='relative w-full h-[250px]'>
          <Image source={images.signUpCar} className='z-0 w-full h-[250px]' />
          <Text className='text-2xl text-black font-JakartaBold absolute bottom-10 left-24 capitalize'>Create your account</Text>
        </View>

        {/* Input Fields */}
        <View className='p-5'>
          <InputField 
          label="Name"
          placeholder="Enter name"
          icon={icons.person}
          value={values.name}
          onChangeText = {(value: any) => setValues({...values, name: value})}
          />

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

          <CustomBtn onPress={handleSignUp} title='Sign Up' className='mt-6' />

          <OAuth />

          <Link href="/(auth)/sign-in" className='text-lg text-center text-general-800 mt-5' >
            <Text>Already have an account? </Text>
            <Text className='text-primary-500'>Login</Text>
          </Link>

        </View>

      </View>
      </GestureHandlerRootView>
    </ScrollView>
  )
}

export default Signup