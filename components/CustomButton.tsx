import { AppColors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { DimensionValue, Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

type IconType = ComponentProps<typeof Ionicons>['name'];
interface Props {
    width?: DimensionValue;
    height?: DimensionValue;
    title: string;
    textColor?: string;
    textSize?: number;
    textWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    backgroundColor?: string;
    icon?: IconType;
    iconSize?: number;
    iconColor?: string;
    onPress: () => void;
    style?: ViewStyle;
    children?: React.ReactNode;
}

export function CustomButton(props: Props) {
    const { width, height, title, textColor, textWeight, textSize, backgroundColor, icon, iconSize, iconColor, style, onPress, children } = props;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: width || '100%',
            height: height || 'auto',
            borderRadius: 4,
            gap: 10,
            // backgroundColor: backgroundColor || AppColors.primary,
            paddingVertical: 16,
            textAlign: 'center',
        },
        text: {
            fontSize: textSize || 16,
            fontWeight: textWeight || '600',
            color: textColor || '#FFF',
            textAlign: 'center',
        },
    });

    return (
        <Pressable style={[{ flexDirection: 'row', alignSelf: 'center', backgroundColor: backgroundColor || AppColors.primary }, style]} onPress={onPress} >
            <View style={styles.container}>
                {icon && <Ionicons name={icon} size={iconSize || 24} color={iconColor || '#FFF'} />}
                {children ? children : <Text style={styles.text}>{title}</Text>}
            </View>
        </Pressable>
    );
}

