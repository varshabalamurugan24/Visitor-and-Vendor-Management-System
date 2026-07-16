import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>🏢</Text>

      <Text style={styles.title}>Welcome Back</Text>

      <Text style={styles.subtitle}>
        Login to continue
      </Text>

      <TextInput
        placeholder="Email Address"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity>
        <Text style={styles.forgot}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleText}>
          Continue with Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/(auth)/register")}
      >
        <Text style={styles.register}>
          Don't have an account? Register
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#F5F7FA",
  },

  logo: {
    fontSize: 70,
    textAlign: "center",
    marginBottom: 15,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1565C0",
  },

  subtitle: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginBottom: 35,
  },

  input: {
  backgroundColor: "#fff",
  borderWidth: 1,
  borderColor: "#ddd",
  borderRadius: 12,
  padding: 15,
  marginBottom: 18,
},

forgot: {
  color: "#1565C0",
  textAlign: "right",
  marginBottom: 25,
},
  loginButton: {
    backgroundColor: "#1565C0",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  loginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },

  googleButton: {
    marginTop: 18,
    borderWidth: 1,
    borderColor: "#1565C0",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  googleText: {
    color: "#1565C0",
    fontWeight: "bold",
  },

  register: {
    textAlign: "center",
    marginTop: 25,
    color: "#1565C0",
    fontWeight: "600",
  },
});