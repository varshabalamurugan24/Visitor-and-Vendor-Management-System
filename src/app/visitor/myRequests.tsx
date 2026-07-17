import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const requests = [
  {
    id: "1",
    host: "HR Manager",
    purpose: "Interview",
    date: "20 Jul 2026",
    status: "Pending",
  },
  {
    id: "2",
    host: "Project Manager",
    purpose: "Project Discussion",
    date: "15 Jul 2026",
    status: "Approved",
  },
  {
    id: "3",
    host: "Admin Office",
    purpose: "Document Submission",
    date: "10 Jul 2026",
    status: "Rejected",
  },
];

export default function MyRequests() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "#2E7D32";
      case "Pending":
        return "#F9A825";
      case "Rejected":
        return "#D32F2F";
      default:
        return "#666";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Requests</Text>

      <FlatList
        data={requests}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>
              Request ID : {item.id}
            </Text>

            <Text style={styles.text}>
              Host : {item.host}
            </Text>

            <Text style={styles.text}>
              Purpose : {item.purpose}
            </Text>

            <Text style={styles.text}>
              Date : {item.date}
            </Text>

            <Text
              style={[
                styles.status,
                { color: getStatusColor(item.status) },
              ]}
            >
              Status : {item.status}
            </Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.detailsButton}>
                <Text style={styles.buttonText}>
                  View Details
                </Text>
              </TouchableOpacity>

              {item.status === "Pending" && (
                <TouchableOpacity style={styles.cancelButton}>
                  <Text style={styles.buttonText}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      />
    </View>
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
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 4,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 10,
  },

  text: {
    fontSize: 15,
    marginBottom: 5,
    color: "#444",
  },

  status: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 12,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  detailsButton: {
    backgroundColor: "#1565C0",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },

  cancelButton: {
    backgroundColor: "#D32F2F",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});