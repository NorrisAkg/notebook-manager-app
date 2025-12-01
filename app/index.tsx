import { CustomButton } from "@/components/CustomButton";
import { AppColors } from "@/constants/colors";
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const logo = require('@/assets/images/logo.jpg');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text style={styles.title}>Notebook Manager</Text>
      <Text style={styles.subtitle}>Manage your contacts and send ETH with ease. Connect your wallet and start organizing your Web3 network.</Text>
      <LinearGradient
        colors={[AppColors.primary, '#8F69EA']} style={{ borderRadius: 6, marginTop: 36 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        {/* <Link href="/login" style={{ justifyContent: 'center', }}> */}
        <CustomButton style={{ width: '60%', backgroundColor: 'transparent', }} title="Commencer" textSize={18} onPress={() => { }} >
          <Link href="/login" style={{ justifyContent: 'center', flex: 1, textAlign: 'center', color: AppColors.white, fontSize: 18 }}>
            <Text style={{ color: AppColors.white, fontSize: 18, fontWeight: 'bold', textAlign: 'center', paddingVertical: 16 }}>Commencer</Text>
          </Link>
        </CustomButton>
        {/* </Link> */}
      </LinearGradient>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
    paddingHorizontal: 24,
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    backgroundColor: AppColors.white,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  logo: {
    height: 50,
    width: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.5,
    textAlign: 'justify',
  },
});
