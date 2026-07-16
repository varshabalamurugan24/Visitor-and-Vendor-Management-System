import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Visitor & Vendor{"\n"}Management System
      </Text>

      <Text style={styles.subtitle}>
        Secure Digital Visitor Management
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(auth)/login")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1565C0",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: "white",
    fontSize: 18,
    marginTop: 15,
    marginBottom: 50,
    textAlign: "center",
  },

  button: {
    backgroundColor: "white",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
  },

  buttonText: {
    color: "#1565C0",
    fontSize: 18,
    fontWeight: "bold",
  },
});