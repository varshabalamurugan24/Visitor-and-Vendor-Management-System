import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
    title: string;
    value?: string;
    onPress?: () => void;
}

export default function DashboardCard({
    title,
    value,
    onPress
}: Props) {

    return (
        <TouchableOpacity 
            style={styles.card}
            onPress={onPress}
        >

            <Text style={styles.title}>
                {title}
            </Text>

            {
                value &&
                <Text style={styles.value}>
                    {value}
                </Text>
            }

        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({

    card:{
        backgroundColor:"#ffffff",
        padding:20,
        margin:10,
        borderRadius:15,
        elevation:5
    },

    title:{
        fontSize:18,
        fontWeight:"bold",
        color:"#333"
    },

    value:{
        fontSize:28,
        marginTop:10,
        color:"#2563eb"
    }

});