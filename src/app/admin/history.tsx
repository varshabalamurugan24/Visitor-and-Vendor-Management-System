import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";

const historyData = [
  {
    id: "VIS001",
    visitor: "Varsha",
    date: "20 Jul 2026",
    checkIn: "09:45 AM",
    checkOut: "11:15 AM",
    duration: "1 hr 30 min",
    status: "Completed",
  },
  {
    id: "VIS002",
    visitor: "Rahul",
    date: "21 Jul 2026",
    checkIn: "10:00 AM",
    checkOut: "11:00 AM",
    duration: "1 hr",
    status: "Completed",
  },
  {
    id: "VIS003",
    visitor: "Priya",
    date: "22 Jul 2026",
    checkIn: "--",
    checkOut: "--",
    duration: "--",
    status: "Cancelled",
  },
];

export default function HistoryScreen() {
  const [search, setSearch] = useState("");

  const filteredHistory = historyData.filter(
    (item) =>
      item.visitor.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "#2E7D32";
      case "Cancelled":
        return "#D32F2F";
      default:
        return "#666";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Visit History</Text>

      <TextInput
        style={styles.search}
        placeholder="Search by Visitor or ID"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.id}>{item.id}</Text>

            <Text style={styles.text}>
              Visitor : {item.visitor}
            </Text>

            <Text style={styles.text}>
              Date : {item.date}
            </Text>

            <Text style={styles.text}>
              Check In : {item.checkIn}
            </Text>

            <Text style={styles.text}>
              Check Out : {item.checkOut}
            </Text>

            <Text style={styles.text}>
              Duration : {item.duration}
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
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
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
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});