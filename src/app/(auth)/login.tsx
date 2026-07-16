import React, {useState} from "react";

import {
View,
Text,
TextInput,
TouchableOpacity,
StyleSheet
} from "react-native";

import {router} from "expo-router";


export default function LoginScreen(){

const [role,setRole] = useState("");



const handleLogin = ()=>{


if(role==="admin")
{
    router.replace("/admin/dashboard");
}


else if(role==="visitor")
{
    router.replace("/visitor/home");
}


else if(role==="vendor")
{
    router.replace("/vendor/home");
}


else
{
    alert("Please select your role");
}


};



return(

<View style={styles.container}>


<Text style={styles.title}>
Login
</Text>



<TextInput
placeholder="Email"
style={styles.input}
/>



<TextInput
placeholder="Password"
secureTextEntry
style={styles.input}
/>



<Text style={styles.roleTitle}>
Select Role
</Text>



<View style={styles.roleContainer}>


<TouchableOpacity
style={[
styles.roleButton,
role==="admin" && styles.selected
]}
onPress={()=>setRole("admin")}
>

<Text>
Admin
</Text>

</TouchableOpacity>




<TouchableOpacity
style={[
styles.roleButton,
role==="visitor" && styles.selected
]}
onPress={()=>setRole("visitor")}
>

<Text>
Visitor
</Text>

</TouchableOpacity>





<TouchableOpacity
style={[
styles.roleButton,
role==="vendor" && styles.selected
]}
onPress={()=>setRole("vendor")}
>

<Text>
Vendor
</Text>

</TouchableOpacity>


</View>



<TouchableOpacity
style={styles.loginButton}
onPress={handleLogin}
>


<Text style={styles.loginText}>
LOGIN
</Text>


</TouchableOpacity>



</View>

)

}



const styles=StyleSheet.create({

container:{
flex:1,
padding:25,
justifyContent:"center",
backgroundColor:"#F5F7FA"
},


title:{
fontSize:32,
fontWeight:"bold",
textAlign:"center",
marginBottom:30
},


input:{
borderWidth:1,
borderColor:"#ccc",
padding:15,
borderRadius:10,
marginBottom:15
},


roleTitle:{
fontSize:18,
fontWeight:"bold",
marginTop:10
},


roleContainer:{
flexDirection:"row",
justifyContent:"space-between",
marginVertical:20
},


roleButton:{
padding:15,
borderWidth:1,
borderRadius:10,
width:"30%",
alignItems:"center"
},


selected:{
backgroundColor:"#90CAF9"
},


loginButton:{
backgroundColor:"#1565C0",
padding:15,
borderRadius:10,
alignItems:"center"
},


loginText:{
color:"white",
fontWeight:"bold"
}


});