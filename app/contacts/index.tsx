import { ContactCard } from "@/components/contacts/ContactCard";
import { AppInput } from "@/components/custom-elements/AppInput";
import { FloatingActionButton } from "@/components/custom-elements/FloatingActionButton";
import { FakeContacts } from "@/constants/faker";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { Contact } from "../../types";

export default function Index() {
  const [contacts, setContacts] = useState<Array<Contact>>(FakeContacts);

  useEffect(() => {
    // Fetch contacts from an API or local storage if needed
    setContacts(FakeContacts);
  }, []);

  return (
    <View style={styles.container}>
      {/* <SearchBar placeholder="Rechercher un contact..." /> */}
      <AppInput placeholder="Rechercher un contact..." trailingIcon="search" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>contacts</Text>
      </View>
      <SafeAreaView style={styles.body} edges={["left", "right", "bottom"]}>
        <FlatList
          style={{ marginTop: 10 }}
          data={contacts}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          keyExtractor={(item) => item.id}
          renderItem={(item) => {
            const _ = <ContactCard contact={item.item} />;

            return _;
          }}
        />
      </SafeAreaView>

      {/* Floating action button */}
      <FloatingActionButton
        withGradient
        style={styles.floatingButton}
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: "100%",
    position: "relative",
    paddingHorizontal: 16,
  },
  headerContainer: {
    // padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  body: {
    marginBottom: 10,
  },
  floatingButton: {
    backgroundColor: "transparent",
  },
});
