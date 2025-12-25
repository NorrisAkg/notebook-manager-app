import { AppColors } from "@/constants/colors";
import { ColorValue, Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  label: string;
  active: boolean;
  onClick: VoidFunction;
  activeBackgroundColor?: ColorValue;
  activeTextColor?: ColorValue;
}
export function TabOption(props: Props) {
  const { label, active, onClick } = props;
  return (
    <View
      style={[styles.tab, active && { backgroundColor: AppColors.primary }]}
    >
      <Pressable onPress={onClick}>
        <Text style={[styles.tabText, active && { color: AppColors.white }]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
  },
  tab: {
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: AppColors.gray + "10",
  },
  tabText: {
    color: AppColors.black,
    fontSize: 16,
  },
});
