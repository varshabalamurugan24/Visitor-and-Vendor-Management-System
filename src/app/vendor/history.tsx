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

const historyData = [
  {
    id: "VIS001",
    date: "20 Jul 2026",
    company: "ABC Technologies",
    host: "HR Manager",
    checkIn: "09:30 AM",
    checkOut: "11:00 AM",
    duration: "1 hr 30 min",
    status: "Completed",
  },
  {
    id: "VIS002",
    date: "21 Jul 2026",
    company: "XYZ Solutions",
    host: "Technical Lead",
    checkIn: "10:15 AM",
    checkOut: "12:00 PM",
    duration: "1 hr 45 min",
    status: "Completed",
  },
  {
    id: "VIS003",
    date: "22 Jul 2026",
    company: "Global Suppliers",
    host: "Admin Office",
    checkIn: "--",
    checkOut: "--",
    duration: "--",
    status: "Cancelled",
  },
];

export default function VendorHistory() {
  const [search, setSearch] = useState("");

  const filteredHistory = historyData.filter(
    (item) =>
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.company.toLowerCase().includes(search.toLowerCase()) ||
      item.host.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "#2E7D32";
      case "Cancelled":
        return "#D32F2F";
      default:
        return "#F9A825";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Visit History</Text>

      <TextInput
        style={styles.search}
        placeholder="Search by Visit ID, Company or Host"
        value={search}
        onChangeText={setSearch}
      />

      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => Alert.alert("Filter", "Filter feature will be added after backend integration.")}
      >
        <Text style={styles.filterText}>Filter</Text>
      </TouchableOpacity>

      <FlatList
        data={filteredHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Text style={styles.id}>{item.id}</Text>

            <Text style={styles.text}>Date : {item.date}</Text>
            <Text style={styles.text}>Company : {item.company}</Text>
            <Text style={styles.text}>Host : {item.host}</Text>
            <Text style={styles.text}>Check-In : {item.checkIn}</Text>
            <Text style={styles.text}>Check-Out : {item.checkOut}</Text>
            <Text style={styles.text}>Duration : {item.duration}</Text>

            <Text
              style={[
                styles.status,
                { color: getStatusColor(item.status) },
              ]}
            >
              Status : {item.status}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() =>
                Alert.alert(
                  "Visit Details",
                  `Visit ID: ${item.id}

Company: ${item.company}

Host: ${item.host}

Date: ${item.date}

Check-In: ${item.checkIn}

Check-Out: ${item.checkOut}

Duration: ${item.duration}`
                )
              }
            >
              <Text style={styles.buttonText}>View Details</Text>
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
    marginBottom: 15,
  },

  filterButton: {
    backgroundColor: "#1565C0",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },

  filterText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
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

  detailsButton: {
    backgroundColor: "#1565C0",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});