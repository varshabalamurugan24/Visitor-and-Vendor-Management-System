import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const appointmentData = [
  {
    id: "APP001",
    visitor: "Varsha",
    host: "HR Manager",
    date: "20 Jul 2026",
    time: "10:00 AM",
    purpose: "Project Discussion",
    status: "Pending",
  },
  {
    id: "APP002",
    visitor: "Rahul",
    host: "Technical Lead",
    date: "21 Jul 2026",
    time: "11:30 AM",
    purpose: "Interview",
    status: "Approved",
  },
  {
    id: "APP003",
    visitor: "Priya",
    host: "Admin Office",
    date: "22 Jul 2026",
    time: "2:00 PM",
    purpose: "Document Submission",
    status: "Rejected",
  },
];

export default function AppointmentScreen() {
  const [search, setSearch] = useState("");

  const filteredAppointments = appointmentData.filter(
    (item) =>
      item.visitor.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.host.toLowerCase().includes(search.toLowerCase())
  );

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
      <Text style={styles.heading}>Appointment Management</Text>

      <TextInput
        style={styles.search}
        placeholder="Search by Visitor, Host or Appointment ID"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredAppointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.id}>{item.id}</Text>

            <Text style={styles.text}>
              Visitor : {item.visitor}
            </Text>

            <Text style={styles.text}>
              Host : {item.host}
            </Text>

            <Text style={styles.text}>
              Date : {item.date}
            </Text>

            <Text style={styles.text}>
              Time : {item.time}
            </Text>

            <Text style={styles.text}>
              Purpose : {item.purpose}
            </Text>

            <Text
              style={[
                styles.status,
                { color: getStatusColor(item.status) },
              ]}
            >
              Status : {item.status}
            </Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.viewButton]}
                onPress={() =>
                  Alert.alert(
                    "Appointment Details",
                    `Appointment ID: ${item.id}\nVisitor: ${item.visitor}\nHost: ${item.host}`
                  )
                }
              >
                <Text style={styles.buttonText}>View</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.approveButton]}
                onPress={() => Alert.alert("Success", "Appointment Approved")}
              >
                <Text style={styles.buttonText}>Approve</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[styles.button, styles.rejectButton]}
              onPress={() => Alert.alert("Success", "Appointment Rejected")}
            >
              <Text style={styles.buttonText}>Reject</Text>
            </TouchableOpacity>
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

  search: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    elevation: 4,
  },

  id: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 10,
  },

  text: {
    fontSize: 15,
    color: "#444",
    marginBottom: 5,
  },

  status: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  viewButton: {
    backgroundColor: "#1565C0",
    width: "48%",
  },

  approveButton: {
    backgroundColor: "#2E7D32",
    width: "48%",
  },

  rejectButton: {
    backgroundColor: "#D32F2F",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});