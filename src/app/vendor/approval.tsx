import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";

const approvalData = [
  {
    id: "REQ001",
    date: "20 Jul 2026",
    host: "HR Manager",
    purpose: "Project Discussion",
    status: "Pending",
  },
  {
    id: "REQ002",
    date: "21 Jul 2026",
    host: "Technical Lead",
    purpose: "Equipment Delivery",
    status: "Approved",
  },
  {
    id: "REQ003",
    date: "22 Jul 2026",
    host: "Admin Office",
    purpose: "Maintenance Service",
    status: "Rejected",
  },
];

export default function ApprovalStatus() {
  const [search, setSearch] = useState("");

  const filteredData = approvalData.filter(
    (item) =>
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.host.toLowerCase().includes(search.toLowerCase()) ||
      item.purpose.toLowerCase().includes(search.toLowerCase())
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
      <Text style={styles.heading}>Approval Status</Text>

      <TextInput
        style={styles.search}
        placeholder="Search Request..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.id}>{item.id}</Text>

            <Text style={styles.text}>
              Date : {item.date}
            </Text>

            <Text style={styles.text}>
              Host : {item.host}
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
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 15,
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
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 10,
  },
});