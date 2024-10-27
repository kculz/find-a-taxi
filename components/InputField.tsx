import { images } from "@/constants";
import { InputFieldProps } from "@/types/type";
import { Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableNativeFeedback, View } from "react-native";

const InputField = ({ 
    labelStyle, 
    label, 
    icon, 
    secureTextEntry=false, 
    containerStyle, 
    inputStyle, 
    iconStyle, 
    className, 
    ...props
}: InputFieldProps) => (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableNativeFeedback onPress={Keyboard.dismiss}>
            <View className="my-2 w-full">
                <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>{label}</Text>
                <View className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}>
                    { icon && <Image source={icon} className={`w-6 h-6 ml-4 py-3 ${iconStyle}`}/>}
                    <TextInput 
                    className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
                    secureTextEntry={secureTextEntry}
                    {...props}
                    />
                </View>
            </View>
        </TouchableNativeFeedback>
    </KeyboardAvoidingView>
)
export default InputField;