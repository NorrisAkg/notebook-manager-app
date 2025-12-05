import { CustomButton } from "@/components/CustomButton";
import Stat from "@/components/dashbord/StatCard";
import { AppColors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function dashboard() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[AppColors.primary, AppColors.secondary]}
                style={{ borderRadius: 16, padding: 16, width: '100%', gap: 16 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 13, color: AppColors.white, fontWeight: '600', opacity: 0.7 }}>Wallet address</Text>
                        <Text style={{ fontSize: 16, color: AppColors.white, fontWeight: '600' }}>0x12345...abcd</Text>
                    </View>
                    <View style={{ backgroundColor: AppColors.secondary + '33', padding: 8, borderRadius: 8 }}>
                        <Ionicons name="copy" size={16} color={AppColors.white} />
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 13, color: AppColors.white, fontWeight: '600', opacity: 0.7 }}>Balance</Text>
                    <Text style={{ fontSize: 24, color: AppColors.white, fontWeight: '800' }}>2.45 ETH</Text>
                </View>
            </LinearGradient>
            <View style={styles.statsRow}>
                <Stat width="48%" statTitle="Contacts" statValue="3" icon="people" iconColor={AppColors.primary} />
                <Stat width="48%" statTitle="Envois" statValue="12" icon="send" iconColor={AppColors.secondary} />
            </View>
            <LinearGradient
                colors={[AppColors.primary, '#8F69EA']} style={{ borderRadius: 6, marginTop: 16 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <CustomButton icon="person-add"
                    iconSize={18}
                    style={{ backgroundColor: 'transparent', }} title="Ajouter un contact" textSize={18} onPress={() => { }} />
            </LinearGradient>
            <CustomButton style={{ marginTop: 8, backgroundColor: 'transparent', }}
                backgroundColor={AppColors.white}
                icon="book"
                iconSize={18}
                iconColor="#000"
                title="Voir mes contacts"
                textSize={18}
                textColor="#000"
                onPress={() => { }} >
                <Link href="/contacts" style={{ justifyContent: 'center', flex: 1, textAlign: 'center', color: AppColors.white, fontSize: 18 }}>
                    <Text style={{ color: AppColors.white, fontSize: 18, fontWeight: 'bold', textAlign: 'center', paddingVertical: 16 }}>Commencer</Text>
                </Link>
            </CustomButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.background,
        paddingHorizontal: 12,
        paddingVertical: 16,
        gap: 8,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 16,
        gap: 8,
    },
});