import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function RequestAppointment() {
  const [vendorName, setVendorName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hostName, setHostName] = useState("");
  const [department, setDepartment] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("");
  const [purpose, setPurpose] = useState("");
  const [visitors, setVisitors] = useState("");

  const handleSubmit = () => {
    Alert.alert(
      "Request Submitted",
      "Your appointment request has been sent successfully."
    );
  };

  const handleReset = () => {
    setVendorName("");
    setCompanyName("");
    setEmail("");
    setPhone("");
    setHostName("");
    setDepartment("");
    setVisitDate("");
    setVisitTime("");
    setPurpose("");
    setVisitors("");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Request Appointment</Text>

      <TextInput
        style={styles.input}
        placeholder="Vendor Name"
        value={vendorName}
        onChangeText={setVendorName}
      />

      <TextInput
        style={styles.input}
        placeholder="Company Name"
        value={companyName}
        onChangeText={setCompanyName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.input}
        placeholder="Employee / Host Name"
        value={hostName}
        onChangeText={setHostName}
      />

      <TextInput
        style={styles.input}
        placeholder="Department"
        value={department}
        onChangeText={setDepartment}
      />

      <TextInput
        style={styles.input}
        placeholder="Visit Date (DD/MM/YYYY)"
        value={visitDate}
        onChangeText={setVisitDate}
      />

      <TextInput
        style={styles.input}
        placeholder="Visit Time (10:00 AM)"
        value={visitTime}
        onChangeText={setVisitTime}
      />

      <TextInput
        style={styles.input}
        placeholder="Purpose of Visit"
        value={purpose}
        onChangeText={setPurpose}
      />

      <TextInput
        style={styles.input}
        placeholder="Number of Visitors"
        keyboardType="numeric"
        value={visitors}
        onChangeText={setVisitors}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Submit Request</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.resetButton}
        onPress={handleReset}
      >
        <Text style={styles.buttonText}>Reset</Text>
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
    textAlign: "center",
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
    fontSize: 16,
  },

  submitButton: {
    backgroundColor: "#1565C0",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  resetButton: {
    backgroundColor: "#D32F2F",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
    marginBottom: 40,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});