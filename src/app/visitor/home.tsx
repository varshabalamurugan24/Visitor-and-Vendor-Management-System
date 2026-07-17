import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { router } from "expo-router";

export default function VisitorHome() {
  const menu = [
    {
      title: "Register Visit",
      icon: "📝",
      route: "/visitor/registerVisit",
    },
    {
      title: "My Requests",
      icon: "📋",
      route: "/visitor/myRequests",
    },
    {
      title: "Approval Status",
      icon: "✅",
      route: "/visitor/approval",
    },
    {
      title: "QR Pass",
      icon: "📱",
      route: "/visitor/qr",
    },
    {
      title: "Visit History",
      icon: "📜",
      route: "/visitor/history",
    },
    {
      title: "My Profile",
      icon: "👤",
      route: "/visitor/profile",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Visitor Dashboard</Text>

      <Text style={styles.subHeading}>
        Welcome to Visitor & Vendor Management System 👋
      </Text>

      {/* Upcoming Visit Card */}

      <View style={styles.visitCard}>
        <Text style={styles.cardTitle}>Upcoming Visit</Text>

        <Text style={styles.cardText}>Host : HR Manager</Text>

        <Text style={styles.cardText}>Date : 20 July 2026</Text>

        <Text style={styles.cardText}>Time : 10:00 AM</Text>

        <Text style={styles.status}>Status : Approved</Text>
      </View>

      <Text style={styles.section}>Quick Actions</Text>

      <View style={styles.grid}>
        {menu.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.box}
            onPress={() => router.push(item.route as any)}
          >
            <Text style={styles.icon}>{item.icon}</Text>

            <Text style={styles.boxText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
    fontSize: 30,
    fontWeight: "bold",
    color: "#1565C0",
    marginTop: 30,
  },

  subHeading: {
    fontSize: 16,
    color: "#555",
    marginTop: 8,
    marginBottom: 20,
  },

  visitCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    marginBottom: 25,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 10,
  },

  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },

  status: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },

  section: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  box: {
    width: "47%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    marginBottom: 15,
    elevation: 4,
  },

  icon: {
    fontSize: 35,
  },

  boxText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});