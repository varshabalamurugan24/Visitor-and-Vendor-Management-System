import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";

import LoadingSpinner from "../components/LoadingSpinner";
import CustomAlert from "../components/CustomAlert";


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);


  const [showMessage, setShowMessage] = useState(false);

  const [message, setMessage] = useState("");

  const [messageType, setMessageType] =
    useState<"success" | "error" | "warning">("success");



  const showAlert = (
    type: "success" | "error" | "warning",
    msg: string
  ) => {

    setMessageType(type);
    setMessage(msg);
    setShowMessage(true);


    setTimeout(() => {
      setShowMessage(false);
    },3000);

  };



  const handleLogin = async () => {


    if(email.trim()==="" || password.trim()===""){

      showAlert(
        "error",
        "Please enter Email and Password."
      );

      return;
    }



    if(!/\S+@\S+\.\S+/.test(email)){

      showAlert(
        "warning",
        "Please enter a valid Email Address."
      );

      return;
    }



    if(password.length < 6){

      showAlert(
        "warning",
        "Password must contain at least 6 characters."
      );

      return;

    }



    try{


      setLoading(true);



      // ==============================
      // Spring Boot API will come here
      // ==============================

      /*
      
      const response = await api.post(
        "/auth/login",
        {
          email,
          password
        }
      );

      const role=response.data.role;

      */


      // Temporary simulation

      await new Promise(resolve =>
        setTimeout(resolve,2000)
      );



      showAlert(
        "success",
        "Login Successful!"
      );



      setTimeout(()=>{


        /*
          Replace this after backend:

          if(role==="ADMIN")
             router.replace("/admin/dashboard");

          else if(role==="VISITOR")
             router.replace("/visitor/dashboard");

          else if(role==="VENDOR")
             router.replace("/vendor/dashboard");

        */


        // Temporary navigation

        router.replace("/admin/dashboard");


      },1500);



    }
    catch(error){


      showAlert(
        "error",
        "Login Failed. Please try again."
      );


    }
    finally{

      setLoading(false);

    }

  };



  return(


    <View style={styles.container}>


      <LoadingSpinner

        visible={loading}

        message="Logging in..."

      />



      {
        showMessage &&

        <CustomAlert

          type={messageType}

          message={message}

        />

      }



      <Text style={styles.title}>
        Login
      </Text>




      <TextInput

        placeholder="Email"

        keyboardType="email-address"

        autoCapitalize="none"

        value={email}

        onChangeText={setEmail}

        style={styles.input}

      />




      <TextInput

        placeholder="Password"

        secureTextEntry={!showPassword}

        value={password}

        onChangeText={setPassword}

        style={styles.input}

      />



      <TouchableOpacity

        onPress={()=>setShowPassword(!showPassword)}

      >

        <Text style={styles.showPassword}>

          {
            showPassword
            ?
            "Hide Password"
            :
            "Show Password"
          }

        </Text>


      </TouchableOpacity>




      <TouchableOpacity

        style={styles.button}

        onPress={handleLogin}

      >

        <Text style={styles.buttonText}>

          Login

        </Text>


      </TouchableOpacity>





      <TouchableOpacity

        onPress={()=>router.push("/forgotPassword")}

      >

        <Text style={styles.link}>

          Forgot Password?

        </Text>

      </TouchableOpacity>





      <TouchableOpacity

        onPress={()=>router.push("/(auth)/register")}

      >

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

    backgroundColor:"#F5F7FA",

  },



  title:{

    fontSize:32,

    fontWeight:"bold",

    textAlign:"center",

    marginBottom:35,

    color:"#1565C0",

  },



  input:{

    backgroundColor:"#FFFFFF",

    borderWidth:1,

    borderColor:"#DADADA",

    borderRadius:10,

    padding:15,

    marginBottom:15,

    fontSize:16,

  },



  showPassword:{

    textAlign:"right",

    color:"#1565C0",

    marginBottom:15,

    fontWeight:"600",

  },



  button:{

    backgroundColor:"#1565C0",

    padding:15,

    borderRadius:10,

    alignItems:"center",

  },



  buttonText:{

    color:"#FFFFFF",

    fontWeight:"bold",

    fontSize:18,

  },



  link:{

    textAlign:"center",

    marginTop:20,

    color:"#1565C0",

    fontSize:15,

    fontWeight:"600",

  },


});