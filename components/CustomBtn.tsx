import { ButtonProps } from "@/types/type";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const getBgVariantStyle = (variant: ButtonProps['bgVariant']) => {
    switch (variant) {
        case 'primary':
            return 'bg-blue-500'
        case 'secondary':
            return 'bg-gray-500'
        case 'danger':
            return 'bg-red-500'
        case 'success':
            return 'bg-green-500'
        case 'outline':
            return 'bg-transparent border-nuetral-300  border-[0.5px]'
        default:
            return 'bg-[#0286FF]'
    }
}

const getTextVariantStyle = (variant: ButtonProps['textVariant']) => {
    switch (variant) {
        case 'primary':
            return 'text-black'
        case 'secondary':
            return 'text-gray-100'
        case 'danger':
            return 'text-red-100'
        case 'success':
            return 'text-green-100'
        default:
            return 'text-white'
    }
}

const CustomBtn = ({
    onPress,
    title,
    bgVariant = 'primary',
    textVariant = 'default',
    IconLeft,
    IconRight,
    className,
    ...props
}: ButtonProps) =>  {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={`w-full rounded-full flex flex-row   py-3  justify-center items-center shadow-md shadow-neutral-400/70   ${getBgVariantStyle(bgVariant)} ${className}` }
            {...props}
        >
            {IconLeft && <IconLeft />}
            <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>{title}</Text>
            {IconRight && <IconRight />}
        </TouchableOpacity>
    )
}

export default CustomBtn;