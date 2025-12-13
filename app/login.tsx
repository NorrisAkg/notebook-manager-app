import { CustomButton } from "@/components/CustomButton";
import { AppColors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginPage() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.background }} edges={['top', 'bottom']}>
            <View style={styles.page}>
                {/* <SafeAreaView edges={['top', 'bottom']} /> */}
                <View style={styles.container}>
                    <Ionicons name="wallet" size={36} color={AppColors.primary} />
                    <Text style={styles.title}>Log your wallet</Text>
                    <Text style={styles.subtitle}>Choose your preferred connection method</Text>
                    <View style={{ width: '100%', marginTop: 30, gap: 12 }}>
                        <CustomButton
                            icon="wallet"
                            backgroundColor="#E86F13"
                            title="MetaMask" onPress={() => { }} />
                        <CustomButton
                            icon="wallet"
                            title="WalletConnect" onPress={() => { }} />
                        <Link href="/dashboard" style={{ justifyContent: 'center', textAlign: 'center', color: AppColors.primary, fontSize: 18 }}>dashbord</Link>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingHorizontal: 16,
        // backgroundColor: AppColors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        gap: 4,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 16,
        borderRadius: 10,
    },
    title: {
        marginTop: 12,
        fontSize: 26,
        fontWeight: 900,
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.5,
    },
})