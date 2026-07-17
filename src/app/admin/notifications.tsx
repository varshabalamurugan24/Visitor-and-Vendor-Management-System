import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

const notificationData = [
  {
    id: "1",
    title: "New Visitor Request",
    message: "Varsha has requested a visit.",
    time: "10 mins ago",
    status: "Unread",
  },
  {
    id: "2",
    title: "Vendor Registration",
    message: "ABC Technologies submitted a registration request.",
    time: "30 mins ago",
    status: "Unread",
  },
  {
    id: "3",
    title: "Appointment Approved",
    message: "Rahul's appointment has been approved.",
    time: "1 hour ago",
    status: "Read",
  },
];

export default function NotificationsScreen() {
  const [notifications] = useState(notificationData);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notifications</Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>

            <Text style={styles.message}>{item.message}</Text>

            <Text style={styles.time}>{item.time}</Text>

            <Text
              style={[
                styles.status,
                {
                  color:
                    item.status === "Unread"
                      ? "#D32F2F"
                      : "#2E7D32",
                },
              ]}
            >
              {item.status}
            </Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.readButton}
                onPress={() => Alert.alert("Marked as Read")}
              >
                <Text style={styles.buttonText}>Mark as Read</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => Alert.alert("Notification Deleted")}
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

  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    elevation: 4,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1565C0",
  },

  message: {
    fontSize: 15,
    color: "#444",
    marginTop: 8,
  },

  time: {
    color: "#777",
    marginTop: 8,
  },

  status: {
    fontWeight: "bold",
    marginTop: 10,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  readButton: {
    backgroundColor: "#1565C0",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },

  deleteButton: {
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