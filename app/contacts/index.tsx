import { ContactCard } from "@/components/contacts/ContactCard";
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
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>contacts</Text>
            <SafeAreaView>
                <FlatList data={contacts}
                    keyExtractor={(item) => item.id}
                    renderItem={(item) => {
                        const _ = <ContactCard contact={item.item} />

                        return _;
                    }}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        padding: 16,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
});