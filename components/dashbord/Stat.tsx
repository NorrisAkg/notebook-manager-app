import { AppColors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { DimensionValue, StyleSheet, Text, View } from "react-native";

type IconType = ComponentProps<typeof Ionicons>['name'];

interface StatProps {
    width?: DimensionValue;
    statTitle: string;
    statValue: string;
    icon: IconType;
    iconColor?: string;
}

export default function Stat(props: StatProps) {
    const { width, statTitle, statValue, icon, iconColor } = props;

    const styles = StyleSheet.create({
        container: {
            width: width ?? '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 12,
            backgroundColor: AppColors.white,
            borderRadius: 8,
            padding: 18,
        },
        iconContainer: {
            backgroundColor: iconColor + '20',
            padding: 10,
            borderRadius: '100%',
        },
        title: {
            fontSize: 12,
            fontWeight: '600',
            opacity: 0.5,
        },
        value: {
            fontSize: 20,
            fontWeight: '700',
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Ionicons name={icon} size={22} color={iconColor || AppColors.primary} />
            </View>
            <View>
                <Text style={styles.value}>{statValue}</Text>
                <Text style={styles.title}>{statTitle}</Text>
            </View>
        </View>
    );
}