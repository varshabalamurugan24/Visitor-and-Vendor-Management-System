import { router } from "expo-router";
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import DashboardCard from "../../components/DashboardCard";

export default function AdminDashboard() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Admin Dashboard</Text>

      <Text style={styles.welcome}>Welcome Admin 👋</Text>

      {/* Statistics */}
      <DashboardCard
        title="Total Visitors"
        value="120"
      />

      <DashboardCard
        title="Total Vendors"
        value="45"
      />

      <DashboardCard
        title="Pending Requests"
        value="18"
      />

      <DashboardCard
        title="Today's Visits"
        value="32"
      />

      {/* Management */}
      <Text style={styles.section}>Management</Text>

      <TouchableOpacity onPress={() => router.push("/admin/visitors")}>
        <DashboardCard title="Manage Visitors" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/admin/vendors")}>
        <DashboardCard title="Manage Vendors" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/admin/appointments")}>
        <DashboardCard title="Appointment Management" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/admin/history")}>
        <DashboardCard title="Visit History" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/admin/notifications")}>
        <DashboardCard title="Notifications" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/admin/reports")}>
        <DashboardCard title="Reports" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/admin/settings")}>
        <DashboardCard title="Settings" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1565C0",
    marginTop: 30,
  },

  welcome: {
    fontSize: 18,
    color: "#555",
    marginVertical: 20,
  },

  section: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1565C0",
    marginTop: 20,
    marginBottom: 10,
  },
});