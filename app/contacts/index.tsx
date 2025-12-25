import { ContactCard } from "@/components/contacts/ContactCard";
import { AppInput } from "@/components/custom-elements/AppInput";
import { AppTabs } from "@/components/custom-elements/AppTabs";
import { FloatingActionButton } from "@/components/custom-elements/FloatingActionButton";
import { FakeContacts } from "@/constants/faker";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import type { Contact } from "../../types";

export default function Index() {
  const [contacts, setContacts] = useState<Array<Contact>>(FakeContacts);
  const tabOptions = [
    { label: "Tous" },
    { label: "Récents" },
    { label: "Favoris" },
  ];

  useEffect(() => {
    // Fetch contacts from an API or local storage if needed
    setContacts(FakeContacts);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AppInput
          placeholder="Rechercher un contact..."
          trailingIcon="search"
        />
      </View>
      <AppTabs options={tabOptions} />
      <FlatList
        style={{ marginTop: 10, paddingBottom: 10, marginBottom: 20 }}
        data={contacts}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        contentContainerStyle={{ paddingBottom: 40 }}
        keyExtractor={(item) => item.id}
        renderItem={(item) => {
          const _ = <ContactCard contact={item.item} />;

          return _;
        }}
      />
      {/* </SafeAreaView> */}/{/* Floating action button */}
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
    gap: 12,
    maxHeight: "100%",
    position: "relative",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  headerContainer: {
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
  },
  floatingButton: {
    backgroundColor: "transparent",
  },
});
