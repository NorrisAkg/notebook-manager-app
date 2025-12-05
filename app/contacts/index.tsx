import { StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>contacts</Text>
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