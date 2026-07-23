import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function VisitorProfile() {
  return (
    <ScrollView style={styles.container}>

      {/* Profile Header */}
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>V</Text>
        </View>

        <Text style={styles.name}>Varsha B</Text>

        <Text style={styles.role}>Visitor</Text>
      </View>

      {/* Personal Information */}

      <Text style={styles.section}>Personal Information</Text>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Visitor ID</Text>
        <Text style={styles.value}>VIS001</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>varsha@gmail.com</Text>

        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>+91 9876543210</Text>

        <Text style={styles.label}>Organization</Text>
        <Text style={styles.value}>Chennai Institute of Technology</Text>

        <Text style={styles.label}>Purpose</Text>
        <Text style={styles.value}>Project Discussion</Text>

        <Text style={styles.label}>Address</Text>
        <Text style={styles.value}>
          Chennai, Tamil Nadu
        </Text>
      </View>

      {/* Actions */}

      <Text style={styles.section}>Account</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Edit Profile")}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Change Password")}
      >
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("My QR Pass")}
      >
        <Text style={styles.buttonText}>My QR Pass</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => Alert.alert("Logout")}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#F4F6F9",
    padding:20,
  },

  profileCard:{
    backgroundColor:"#1565C0",
    borderRadius:20,
    alignItems:"center",
    padding:30,
    marginTop:30,
  },

  avatar:{
    width:90,
    height:90,
    borderRadius:45,
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
  },

  avatarText:{
    fontSize:40,
    fontWeight:"bold",
    color:"#1565C0",
  },

  name:{
    fontSize:24,
    color:"#fff",
    fontWeight:"bold",
    marginTop:15,
  },

  role:{
    color:"#fff",
    fontSize:16,
    marginTop:5,
  },

  section:{
    fontSize:22,
    fontWeight:"bold",
    color:"#1565C0",
    marginTop:25,
    marginBottom:10,
  },

  infoCard:{
    backgroundColor:"#fff",
    borderRadius:15,
    padding:18,
    elevation:4,
  },

  label:{
    color:"#777",
    fontSize:14,
    marginTop:10,
  },

  value:{
    fontSize:17,
    fontWeight:"600",
    color:"#222",
    marginBottom:5,
  },

  button:{
    backgroundColor:"#1565C0",
    padding:15,
    borderRadius:10,
    alignItems:"center",
    marginTop:15,
  },

  buttonText:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:16,
  },

  logoutButton:{
    backgroundColor:"#D32F2F",
    padding:15,
    borderRadius:10,
    alignItems:"center",
    marginTop:25,
    marginBottom:40,
  },

  logoutText:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:16,
  }

});