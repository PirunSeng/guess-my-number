import { Platform, StyleSheet, Text } from "react-native";

function Title({ children }){
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        // borderWidth: Platform.OS === 'ios' ? 2 : 0,
        borderWidth: Platform.select({ ios: 2, android: 0 }),
        borderColor: '#fff',
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
});