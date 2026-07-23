import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function VendorProfile() {
  return (
    <ScrollView style={styles.container}>

      {/* Profile Header */}

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>V</Text>
        </View>

        <Text style={styles.name}>ABC Technologies</Text>
        <Text style={styles.role}>Registered Vendor</Text>
      </View>

      {/* Vendor Information */}

      <View style={styles.sectionRow}>
        <MaterialIcons
          name="business"
          size={28}
          color="#1565C0"
        />

        <Text style={styles.section}>
          Vendor Information
        </Text>
      </View>

      <View style={styles.infoCard}>

        <View style={styles.infoRow}>
          <MaterialIcons name="person" size={20} color="#1565C0" />
          <Text style={styles.label}> Vendor Name</Text>
        </View>
        <Text style={styles.value}>ABC Technologies</Text>

        <View style={styles.infoRow}>
          <MaterialIcons name="business-center" size={20} color="#1565C0" />
          <Text style={styles.label}> Company Name</Text>
        </View>
        <Text style={styles.value}>ABC Technologies Pvt. Ltd.</Text>

        <View style={styles.infoRow}>
          <MaterialIcons name="badge" size={20} color="#1565C0" />
          <Text style={styles.label}> Vendor ID</Text>
        </View>
        <Text style={styles.value}>VEN001</Text>

        <View style={styles.infoRow}>
          <MaterialIcons name="email" size={20} color="#1565C0" />
          <Text style={styles.label}> Email</Text>
        </View>
        <Text style={styles.value}>vendor@abc.com</Text>

        <View style={styles.infoRow}>
          <MaterialIcons name="phone" size={20} color="#1565C0" />
          <Text style={styles.label}> Phone Number</Text>
        </View>
        <Text style={styles.value}>+91 9876543210</Text>

        <View style={styles.infoRow}>
          <MaterialIcons name="location-on" size={20} color="#1565C0" />
          <Text style={styles.label}> Address</Text>
        </View>
        <Text style={styles.value}>Chennai, Tamil Nadu, India</Text>

        <View style={styles.infoRow}>
          <MaterialIcons name="receipt-long" size={20} color="#1565C0" />
          <Text style={styles.label}> GST Number</Text>
        </View>
        <Text style={styles.value}>33ABCDE1234F1Z5</Text>

        <View style={styles.infoRow}>
          <MaterialIcons name="apartment" size={20} color="#1565C0" />
          <Text style={styles.label}> Company Type</Text>
        </View>
        <Text style={styles.value}>IT Services</Text>

        <View style={styles.infoRow}>
          <MaterialIcons name="calendar-month" size={20} color="#1565C0" />
          <Text style={styles.label}> Registration Date</Text>
        </View>
        <Text style={styles.value}>15 Jul 2026</Text>

      </View>

      {/* Account Settings */}

      <View style={styles.sectionRow}>
        <MaterialIcons
          name="settings"
          size={28}
          color="#1565C0"
        />

        <Text style={styles.section}>
          Account Settings
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Edit Profile")}
      >
        <View style={styles.buttonRow}>
          <MaterialIcons
            name="edit"
            size={22}
            color="white"
          />
          <Text style={styles.buttonText}> Edit Profile</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Change Password")}
      >
        <View style={styles.buttonRow}>
          <MaterialIcons
            name="lock"
            size={22}
            color="white"
          />
          <Text style={styles.buttonText}> Change Password</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() =>
          Alert.alert("Logout", "Logged out successfully")
        }
      >
        <View style={styles.buttonRow}>
          <MaterialIcons
            name="logout"
            size={22}
            color="white"
          />
          <Text style={styles.logoutText}> Logout</Text>
        </View>
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

  profileCard: {
    backgroundColor: "#1565C0",
    borderRadius: 20,
    alignItems: "center",
    padding: 30,
    marginTop: 30,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#1565C0",
  },

  name: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 15,
  },

  role: {
    fontSize: 16,
    color: "#fff",
    marginTop: 5,
  },

  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 10,
  },

  section: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1565C0",
    marginLeft: 10,
  },

  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 18,
    elevation: 4,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#555",
  },

  value: {
    fontSize: 16,
    color: "#222",
    marginLeft: 30,
    marginBottom: 8,
  },

  button: {
    backgroundColor: "#1565C0",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  logoutButton: {
    backgroundColor: "#D32F2F",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 40,
  },

  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

});