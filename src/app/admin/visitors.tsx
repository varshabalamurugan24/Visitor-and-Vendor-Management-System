import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

const visitorData = [
  {
    id: "VIS001",
    name: "Varsha",
    phone: "9876543210",
    purpose: "Project Discussion",
    host: "HR Manager",
    status: "Pending",
  },
  {
    id: "VIS002",
    name: "Rahul",
    phone: "9123456789",
    purpose: "Interview",
    host: "Technical Lead",
    status: "Approved",
  },
  {
    id: "VIS003",
    name: "Priya",
    phone: "9988776655",
    purpose: "Document Submission",
    host: "Admin Office",
    status: "Rejected",
  },
];

export default function VisitorsScreen() {
  const [search, setSearch] = useState("");

  const filteredVisitors = visitorData.filter(
    (visitor) =>
      visitor.name.toLowerCase().includes(search.toLowerCase()) ||
      visitor.id.toLowerCase().includes(search.toLowerCase())
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
      <Text style={styles.heading}>Visitor Management</Text>

      <TextInput
        placeholder="Search Visitor..."
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      <FlatList
        data={filteredVisitors}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.id}>{item.id}</Text>

            <Text style={styles.text}>Name : {item.name}</Text>

            <Text style={styles.text}>Phone : {item.phone}</Text>

            <Text style={styles.text}>Host : {item.host}</Text>

            <Text style={styles.text}>Purpose : {item.purpose}</Text>

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
                style={[styles.button, { backgroundColor: "#1565C0" }]}
                onPress={() => Alert.alert("View", "Visitor details")}
              >
                <Text style={styles.buttonText}>View</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#2E7D32" }]}
                onPress={() => Alert.alert("Approved")}
              >
                <Text style={styles.buttonText}>Approve</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#F57C00" }]}
                onPress={() => Alert.alert("Rejected")}
              >
                <Text style={styles.buttonText}>Reject</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#D32F2F" }]}
                onPress={() => Alert.alert("Deleted")}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
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

  search: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
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
    marginBottom: 5,
    color: "#444",
  },

  status: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  button: {
    width: "48%",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});