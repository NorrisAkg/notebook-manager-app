import { AppColors } from "@/constants/colors";
import { IconType } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface Props {
  placeholder?: string;
  textColor?: string;
  trailingIcon?: IconType;
}

export function AppInput(props: Props) {
  const { placeholder, textColor, trailingIcon } = props;
  const [query, setQuery] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);

  // function handleFocus() {
  //   styles.container = {
  //     ...styles.container,
  //     borderColor:
  //   };
  // }

  return (
    <View style={[styles.shadowWrapper, focus && styles.shadowFocused]}>
      <View style={styles.container}>
        {trailingIcon && (
          <Ionicons
            name={trailingIcon}
            size={18}
            color={textColor ? textColor + "66" : AppColors.black + "66"}
          />
        )}
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder={placeholder}
          style={[styles.input, textColor && { color: textColor }]}
          cursorColor={textColor ?? AppColors.black}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholderTextColor={
            textColor ? textColor + "70" : AppColors.black + "70"
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowWrapper: {
    borderRadius: 15,
  },
  shadowFocused: {
    borderRadius: 15,
    borderColor: AppColors.primary,
    borderWidth: 2,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 15,
    borderColor: AppColors.black + "66",
    backgroundColor: AppColors.white,
  },
  input: {
    flex: 1,
    height: "auto",
    maxHeight: "100%",
    color: AppColors.black,
  },
});
