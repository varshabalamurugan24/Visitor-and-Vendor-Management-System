import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  type: "success" | "error" | "warning";
  message: string;
}

export default function CustomAlert({
  type,
  message,
}: Props) {

  const getColor = () => {
    switch (type) {
      case "success":
        return "#2E7D32";
      case "error":
        return "#D32F2F";
      case "warning":
        return "#F9A825";
      default:
        return "#1565C0";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return "check-circle";
      case "error":
        return "error";
      case "warning":
        return "warning";
      default:
        return "info";
    }
  };

  return (
    <View
      style={[
        styles.container,
        { borderLeftColor: getColor() },
      ]}
    >
      <MaterialIcons
        name={getIcon()}
        size={28}
        color={getColor()}
      />

      <Text style={styles.message}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 6,
    marginVertical: 10,
    elevation: 4,
  },

  message: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
});