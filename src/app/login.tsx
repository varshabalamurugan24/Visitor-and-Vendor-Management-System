import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Login() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
        <Text style={styles.link}>
          Don't have an account? Register
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    padding:20,
    backgroundColor:"#F5F7FA"
  },

  title:{
    fontSize:32,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:40,
    color:"#1565C0"
  },

  input:{
    borderWidth:1,
    borderColor:"#ccc",
    borderRadius:10,
    padding:15,
    marginBottom:20,
    backgroundColor:"#fff"
  },

  button:{
    backgroundColor:"#1565C0",
    padding:15,
    borderRadius:10,
    alignItems:"center"
  },

  buttonText:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:18
  },

  link:{
    textAlign:"center",
    marginTop:20,
    color:"#1565C0"
  }

});