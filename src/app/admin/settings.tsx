import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function SettingsScreen() {

  const handlePress = (title: string) => {
    Alert.alert(title, `${title} feature will be connected to the backend later.`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Settings</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => handlePress("Admin Profile")}
      >
        <Text style={styles.icon}>👤</Text>
        <View>
          <Text style={styles.title}>Admin Profile</Text>
          <Text style={styles.subtitle}>
            View and edit your profile
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => handlePress("Change Password")}
      >
        <Text style={styles.icon}>🔒</Text>
        <View>
          <Text style={styles.title}>Change Password</Text>
          <Text style={styles.subtitle}>
            Update your password
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => handlePress("Dark Mode")}
      >
        <Text style={styles.icon}>🌙</Text>
        <View>
          <Text style={styles.title}>Dark Mode</Text>
          <Text style={styles.subtitle}>
            Theme settings
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => handlePress("About Application")}
      >
        <Text style={styles.icon}>ℹ️</Text>
        <View>
          <Text style={styles.title}>About Application</Text>
          <Text style={styles.subtitle}>
            Visitor & Vendor Management System
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => handlePress("Contact Support")}
      >
        <Text style={styles.icon}>📞</Text>
        <View>
          <Text style={styles.title}>Contact Support</Text>
          <Text style={styles.subtitle}>
            Get help from the support team
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.logoutButton]}
        onPress={() => Alert.alert("Logout", "Logged out successfully.")}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F4F6F9",
    padding: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1565C0",
    marginTop: 30,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    fontSize: 28,
    marginRight: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1565C0",
  },

  subtitle: {
    color: "#666",
    marginTop: 5,
  },

  logoutButton: {
    backgroundColor: "#D32F2F",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40,
  },

  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },

});