import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  title: string;
  value?: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  onPress?: () => void;
}

export default function DashboardCard({
  title,
  value,
  icon = "dashboard",
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.row}>

        <View style={styles.iconContainer}>
          <MaterialIcons
            name={icon}
            size={32}
            color="#1565C0"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {title}
          </Text>

          {value && (
            <Text style={styles.value}>
              {value}
            </Text>
          )}
        </View>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 5,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    marginLeft: 15,
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  value: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1565C0",
    marginTop: 5,
  },

});