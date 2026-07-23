import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function ReportsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Reports & Analytics</Text>

      {/* Statistics */}

      <View style={styles.card}>
        <Text style={styles.title}>Total Visitors</Text>
        <Text style={styles.value}>120</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Total Vendors</Text>
        <Text style={styles.value}>45</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Today's Visits</Text>
        <Text style={styles.value}>32</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Pending Requests</Text>
        <Text style={styles.value}>18</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Approved Requests</Text>
        <Text style={styles.value}>85</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Rejected Requests</Text>
        <Text style={styles.value}>17</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Monthly Visits</Text>
        <Text style={styles.value}>420</Text>
      </View>

      {/* Buttons */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Export", "PDF Report will be available after backend integration.")}
      >
        <Text style={styles.buttonText}>Export Report</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#2E7D32" }]}
        onPress={() => Alert.alert("Download", "Excel Report will be available after backend integration.")}
      >
        <Text style={styles.buttonText}>Download Excel</Text>
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
    padding: 20,
    marginBottom: 15,
    elevation: 4,
  },

  title: {
    fontSize: 18,
    color: "#555",
  },

  value: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1565C0",
    marginTop: 10,
  },

  button: {
    backgroundColor: "#1565C0",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});