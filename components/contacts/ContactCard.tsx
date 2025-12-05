import { AppColors } from "@/constants/colors";
import { Image, StyleSheet, View } from "react-native";

export function ContactCard() {
    return (
        <View style={styles.container}>
            <View style={styles.contactBox}>
                <Image source={require('@/assets/images/avatar.png')} width={50} height={50} style={{ borderRadius: "100%" }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: AppColors.white,
        borderRadius: 8,
        padding: 16,
    },
    contactBox: {
        flexDirection: 'row',
    }
});