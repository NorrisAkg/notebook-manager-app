import { AppColors } from "@/constants/colors";
import type { Contact } from "@/types/contact";
import { sliceEthAddress } from "@/utils/eth-address-slicer";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
    contact: Contact;
}

export function ContactCard({ contact }: Props) {
    const contactItem = { ...contact, address: sliceEthAddress(contact.address) };
    return (
        <View style={styles.container}>
            <View style={styles.contactBox}>
                <View style={styles.avatarBox}>
                    <Image source={require('@/assets/images/avatar.png')} style={{ width: '80%', height: '80%' }} />
                </View>
                <View style={styles.infosBox}>
                    <Text style={styles.nameText}>{contactItem.name}</Text>
                    <Text style={styles.addressText}>{contactItem.address}</Text>
                    <Text style={styles.phoneText}>{contactItem.phone}</Text>
                </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={AppColors.black + '5'} style={{ opacity: 0.7 }} />
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
        alignItems: 'center',
        gap: 10,
    },
    avatarBox: {
        borderWidth: 1,
        borderColor: AppColors.black + '2',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        padding: 5,
        borderRadius: 100,
        boxSizing: 'border-box',
    },
    infosBox: {
        backgroundColor: 'transparent',
        gap: 2,
    },
    nameText: {
        fontSize: 16,
        color: AppColors.black,
        fontWeight: '700',
    },
    addressText: {
        fontSize: 14,
        color: AppColors.black,
        opacity: 0.7,
        fontWeight: '600',
    },
    phoneText: {
        fontSize: 13,
        color: AppColors.black,
        opacity: 0.6,
    },
});