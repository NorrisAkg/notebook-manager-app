import { ContactCard } from "@/components/contacts/ContactCard";
import { FloatingActionButton } from "@/components/custom-elements/FloatingActionButton";
import { AppColors } from "@/constants/colors";
import { FakeContacts } from "@/constants/faker";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { Contact } from "../../types/contact";

export default function Index() {

    const [contacts, setContacts] = useState<Array<Contact>>(FakeContacts);

    useEffect(() => {
        // Fetch contacts from an API or local storage if needed
        setContacts(FakeContacts);
    }, []);

    return (
        console.log(contacts[0]),
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>contacts</Text>

            </View>
            <SafeAreaView style={styles.body}>
                <FlatList
                    data={contacts}
                    ItemSeparatorComponent={() => < View style={{ height: 10 }} />}
                    keyExtractor={(item) => item.id}
                    renderItem={(item) => {
                        const _ = <ContactCard contact={item.item} />

                        return _;
                    }}
                />
            </SafeAreaView>

            {/* Floating action button */}

            <FloatingActionButton withGradient style={styles.floatingButton} onPress={() => { }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        borderColor: AppColors.black,
        borderWidth: 1,
        padding: 16,
    },
    headerContainer: {
        // padding: 16,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    body: {

    },
    floatingButton: {
        backgroundColor: "transparent",
    }
});