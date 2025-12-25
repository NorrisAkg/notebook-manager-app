import { AppColors } from "@/constants/colors";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TabOption } from "./TabOption";

interface Props {
  options: Array<{ label: string }>;
}
export function AppTabs(props: Props) {
  const { options } = props;
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TabOption
          onClick={() => setActiveTab(index)}
          key={index}
          label={option.label}
          active={activeTab === index}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 4,
  },
  tabText: {
    color: AppColors.white,
    fontSize: 16,
  },
});
