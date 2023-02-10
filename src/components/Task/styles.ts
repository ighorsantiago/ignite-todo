import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 64,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10
    },
    unchecked: {
      width: 32,
      height: 32,
      borderRadius: 16,
      borderWidth: 3,
      borderColor: '#4EA8DE',
    },
    checked: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: '#5E60CE',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textCheacked: {
        flex: 1,
        fontSize: 14,
        color: '#808080',
        marginLeft: 16,
        textDecorationLine: 'line-through'
    },
    textUncheacked: {
        flex: 1,
        fontSize: 14,
        color: '#F2F2F2',
        marginLeft: 16,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: '#FFF',
        fontSize: 24,
      },
});