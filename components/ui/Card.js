import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }){
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary500,
        padding: 16,
        elevation: 8, // Android only
        shadowColor: 'black', // iOS only
        shadowOffset: { width: 0, height: 10 }, // iOS only
        shadowRadius: 6, // iOS only
        shadowOpacity: 0.25 // iOS only
    },
});