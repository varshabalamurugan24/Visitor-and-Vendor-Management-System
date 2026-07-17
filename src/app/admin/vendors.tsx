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

const vendorData = [
  {
    id: "VEN001",
    company: "ABC Technologies",
    representative: "Arun Kumar",
    phone: "9876543210",
    email: "arun@abc.com",
    purpose: "Equipment Delivery",
    status: "Pending",
  },
  {
    id: "VEN002",
    company: "XYZ Solutions",
    representative: "Priya Sharma",
    phone: "9123456789",
    email: "priya@xyz.com",
    purpose: "Maintenance Service",
    status: "Approved",
  },
  {
    id: "VEN003",
    company: "Global Suppliers",
    representative: "Rahul Singh",
    phone: "9988776655",
    email: "rahul@global.com",
    purpose: "Product Demonstration",
    status: "Rejected",
  },
];

export default function VendorsScreen() {
  const [search, setSearch] = useState("");

  const filteredVendors = vendorData.filter(
    (vendor) =>
      vendor.company.toLowerCase().includes(search.toLowerCase()) ||
      vendor.representative.toLowerCase().includes(search.toLowerCase()) ||
      vendor.id.toLowerCase().includes(search.toLowerCase())
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
      <Text style={styles.heading}>Vendor Management</Text>

      <TextInput
        style={styles.search}
        placeholder="Search Vendor..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredVendors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.id}>{item.id}</Text>

            <Text style={styles.text}>Company : {item.company}</Text>
            <Text style={styles.text}>Representative : {item.representative}</Text>
            <Text style={styles.text}>Phone : {item.phone}</Text>
            <Text style={styles.text}>Email : {item.email}</Text>
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
                onPress={() => Alert.alert("View", "Vendor Details")}
              >
                <Text style={styles.buttonText}>View</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#2E7D32" }]}
                onPress={() => Alert.alert("Vendor Approved")}
              >
                <Text style={styles.buttonText}>Approve</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#F57C00" }]}
                onPress={() => Alert.alert("Vendor Rejected")}
              >
                <Text style={styles.buttonText}>Reject</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#D32F2F" }]}
                onPress={() => Alert.alert("Vendor Deleted")}
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
    borderWidth: 1,
    borderColor: "#ddd",
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