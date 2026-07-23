import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import LoadingSpinner from "../components/LoadingSpinner";
import CustomAlert from "../components/CustomAlert";


export default function ChangePassword() {

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");


  const handleChangePassword = async () => {

    if (!currentPassword || !newPassword || !confirmPassword) {
      setAlertMessage("Please fill all fields");
      setAlertVisible(true);
      return;
    }


    if (newPassword !== confirmPassword) {
      setAlertMessage("New password and confirm password do not match");
      setAlertVisible(true);
      return;
    }


    try {

      setLoading(true);


      // Backend API will be connected here
      // Example:
      // await api.post("/auth/change-password", {
      //    currentPassword,
      //    newPassword
      // });


      await new Promise(resolve => setTimeout(resolve, 2000));


      setAlertMessage("Password changed successfully");
      setAlertVisible(true);


      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");


    } 
    catch(error) {

      setAlertMessage("Something went wrong");
      setAlertVisible(true);

    }
    finally {

      setLoading(false);

    }

  };


  return (

    <View style={styles.container}>


      <LoadingSpinner
        visible={loading}
        message="Changing Password..."
      />


      <CustomAlert
        visible={alertVisible}
        message={alertMessage}
        onClose={() => setAlertVisible(false)}
      />


      <Text style={styles.title}>
        Change Password
      </Text>


      <TextInput
        style={styles.input}
        placeholder="Current Password"
        secureTextEntry
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />


      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />


      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />


      <TouchableOpacity
        style={styles.button}
        onPress={handleChangePassword}
      >

        <Text style={styles.buttonText}>
          Change Password
        </Text>

      </TouchableOpacity>


    </View>

  );

}



const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#fff",
    padding:20,
    justifyContent:"center"
  },


  title:{
    fontSize:28,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:40
  },


  input:{
    borderWidth:1,
    borderColor:"#ccc",
    borderRadius:10,
    padding:14,
    marginBottom:15,
    fontSize:16
  },


  button:{
    backgroundColor:"#2563eb",
    padding:16,
    borderRadius:12,
    marginTop:10
  },


  buttonText:{
    color:"#fff",
    textAlign:"center",
    fontSize:17,
    fontWeight:"600"
  }

});