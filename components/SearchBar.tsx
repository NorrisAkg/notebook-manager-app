import { AppColors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface Props {
  placeholder?: string;
}

export function SearchBar(props: Props) {
  const { placeholder } = props;
  const [query, setQuery] = useState<string>("");

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 15,
      borderColor: AppColors.black + "66",
    },
    input: {
      flex: 1,
      // borderWidth: 1,
      borderRadius: 12,
      height: "auto",
      // padding: 12,
      maxHeight: "100%",
    },
  });

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={18} color={AppColors.black + "66"} />
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={AppColors.black + "70"}
      />
    </View>
  );
}
