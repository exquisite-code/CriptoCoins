import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#42445A',
        display: "flex",
        flexDirection: 'column',
        padding: 30
    },
    icons: {
        width: '100%',
        height: 20,
        flexDirection: 'row',
        marginTop: 10
    },
    iconsText: {
        width: '25%'
    },
    full: {
         flex: 1,
         width: "100%",
         flexDirection: "row",
         backgroundColor: "blue",
         marginTop: 10,
         borderRadius: 10 
    }
})