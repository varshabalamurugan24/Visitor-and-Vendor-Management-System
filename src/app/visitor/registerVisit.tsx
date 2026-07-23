import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import CustomAlert from "../../components/CustomAlert";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function RegisterVisit() {
  const [visitorName, setVisitorName] = useState("");
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("");
  const [host, setHost] = useState("");

  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<
    "success" | "error" | "warning"
  >("success");

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    // Validate empty fields
    if (
      visitorName.trim() === "" ||
      phone.trim() === "" ||
      purpose.trim() === "" ||
      host.trim() === ""
    ) {
      setMessageType("error");
      setMessage("Please fill all required fields.");
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      return;
    }

    // Validate phone number
    if (!/^\d{10}$/.test(phone)) {
      setMessageType("warning");
      setMessage("Phone number must contain exactly 10 digits.");
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      return;
    }

    // Show Loading Spinner
    setLoading(true);

    // Simulate API Call
    setTimeout(() => {
      setLoading(false);

      setMessageType("success");
      setMessage("Visit Request Submitted Successfully!");
      setShowMessage(true);

      // Clear Form
      setVisitorName("");
      setPhone("");
      setPurpose("");
      setHost("");

      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }, 2000);
  };

  return (
    <View style={styles.container}>

      {/* Loading Spinner */}
      <LoadingSpinner
        visible={loading}
        message="Submitting Request..."
      />

      <Text style={styles.title}>
        Register Visit
      </Text>

      {/* Success / Error Message */}
      {showMessage && (
        <CustomAlert
          type={messageType}
          message={message}
        />
      )}

      <TextInput
        placeholder="Visitor Name"
        value={visitorName}
        onChangeText={setVisitorName}
        style={styles.input}
      />

      <TextInput
        placeholder="Phone Number"
        keyboardType="number-pad"
        maxLength={10}
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />

      <TextInput
        placeholder="Purpose"
        value={purpose}
        onChangeText={setPurpose}
        style={styles.input}
      />

      <TextInput
        placeholder="Host Person"
        value={host}
        onChangeText={setHost}
        style={styles.input}
      />

      <Button
        title="Submit Request"
        onPress={handleSubmit}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 15,
  },
});