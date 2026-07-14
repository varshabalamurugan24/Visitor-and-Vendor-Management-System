import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <Text style={styles.logo}>🏢</Text>
      </View>

      <Text style={styles.title}>
        Visitor & Vendor
      </Text>

      <Text style={styles.title}>
        Management System
      </Text>

      <Text style={styles.subtitle}>
        Secure and Smart Visitor & Vendor Management for Organizations
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
    backgroundColor: "#F5F7FA",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#1E88E5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    elevation: 8,
  },

  logo: {
    fontSize: 60,
    color: "#fff",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0D47A1",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 20,
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 60,
  },

  button: {
    backgroundColor: "#1565C0",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    elevation: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

});