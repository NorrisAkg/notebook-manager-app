import { AppColors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient, } from "expo-linear-gradient";
import { ColorValue, Pressable, StyleSheet, View, ViewStyle } from "react-native";

interface Props {
    style?: ViewStyle,
    iconColor?: ColorValue,
    iconSize?: number,
    withGradient?: boolean,
    onPress: VoidFunction,
}

export function FloatingActionButton(props: Props) {
    const { style, withGradient, iconColor, iconSize, onPress } = props;

    const styles = StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center",
            width: 40,
            height: 40,
            padding: 5,
            borderRadius: 25,
            position: "absolute",
            bottom: 20,
            right: 20,
            zIndex: 20,
            // shadowColor: AppColors.black + '33'
            // iOS Shadow Props
            shadowColor: AppColors.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            // Android Shadow Prop
            elevation: 5,

            // boxShadow: {
            //     offsetX: 10,
            //     offsetY: -3,
            //     blurRadius: '15px',
            //     spreadDistance: '10px',
            //     color: 'red',
            //     inset: true,
            // },
        },
    });
    return (
        <View style={styles.container}>
            <LinearGradient
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 40,
                    height: 40,
                    padding: 5,
                    borderRadius: 25,
                }}
                colors={[AppColors.primary, withGradient ? '#8F69EA' : AppColors.primary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Pressable style={{ borderColor: AppColors.white }} onPress={onPress}>
                    <Ionicons name="add" color={iconColor || AppColors.white} size={iconSize || 24} />
                </Pressable>
            </LinearGradient>
        </View>
    );
}