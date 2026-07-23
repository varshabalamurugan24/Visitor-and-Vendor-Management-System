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

      {/* Header */}

      <Text style={styles.heading}>
        Admin Dashboard
      </Text>

      <Text style={styles.welcome}>
        Welcome Admin 👋
      </Text>

      {/* Statistics */}

      <DashboardCard
        title="Total Visitors"
        value="120"
        icon="people"
      />

      <DashboardCard
        title="Total Vendors"
        value="45"
        icon="business"
      />

      <DashboardCard
        title="Pending Requests"
        value="18"
        icon="pending-actions"
      />

      <DashboardCard
        title="Today's Visits"
        value="32"
        icon="today"
      />

      {/* Management */}

      <Text style={styles.section}>
        Management
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/admin/visitors")}
      >
        <DashboardCard
          title="Manage Visitors"
          icon="people"
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/admin/vendors")}
      >
        <DashboardCard
          title="Manage Vendors"
          icon="business"
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/admin/appointments")}
      >
        <DashboardCard
          title="Appointment Management"
          icon="event"
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/admin/history")}
      >
        <DashboardCard
          title="Visit History"
          icon="history"
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/admin/notifications")}
      >
        <DashboardCard
          title="Notifications"
          icon="notifications"
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/admin/reports")}
      >
        <DashboardCard
          title="Reports"
          icon="bar-chart"
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/admin/settings")}
      >
        <DashboardCard
          title="Settings"
          icon="settings"
        />
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