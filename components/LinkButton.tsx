import { AppColors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { ExternalPathString, Link, RelativePathString } from "expo-router";
import type { ComponentProps } from "react";
import { DimensionValue, StyleSheet, View, ViewStyle } from "react-native";

type IconType = ComponentProps<typeof Ionicons>['name'];
interface Props {
    width?: DimensionValue;
    height?: DimensionValue;
    title: string;
    color?: string;
    textSize?: number;
    textWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    backgroundColor?: string;
    icon?: IconType;
    iconSize?: number;
    to: RelativePathString | ExternalPathString;
    style?: ViewStyle;
    children?: React.ReactNode;
}

export function LinkButton(props: Props) {
    const { width, height, title, color, textWeight, textSize, backgroundColor, icon, iconSize, style, to } = props;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            paddingVertical: 16,
            textAlign: 'center',
        },
        text: {
            fontSize: textSize || 16,
            fontWeight: textWeight || '600',
            color: color || '#FFF',
            textAlign: 'center',
        },
    });

    return (
        <View style={[{
            flexDirection: 'row',
            width: width || '100%',
            height: height || 'auto', borderRadius: 4, alignSelf: 'center', backgroundColor: backgroundColor || AppColors.primary
        }, style]} >
            <View style={styles.container}>
                {icon && <Ionicons name={icon} size={iconSize || 24} color={color || '#FFF'} />}
                {<Link style={styles.text} href={to}>{title}</Link>}
            </View>
        </View>
    );
}