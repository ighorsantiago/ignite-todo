import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A1A1A',
    },
    header: {
      width: '100%',
      height: 173,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0D0D0D',
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      padding: 24,
      marginTop: -50,
      marginBottom: 32,
    },
    input: {
      flex: 1,
      height: 58,
      backgroundColor: '#262626',
      borderRadius: 5,
      color: '#F2F2F2',
      padding: 16,
      fontSize: 16,
      marginRight: 4,
    },
    button: {
      width: 58,
      height: 58,
      borderRadius: 5,
      backgroundColor: '#1e6f9f',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tasksContainer: {
      width: '100%',
    },
    info: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 24,
      marginBottom: 20,
    },
    box: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    createdLabel: {
      fontSize: 14,
      fontWeight: 'bold',
      marginRight: 8,
      color: '#4EA8DE',
    },
    doneLabel: {
      fontSize: 14,
      fontWeight: 'bold',
      marginRight: 8,
      color: '#8284FA',
    },
    counter: {
      width: 25,
      height: 19,
      borderRadius: 999,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#333333',
    },
    emptyContent: {
      borderTopWidth: 1,
      borderTopColor: '#333333',
      marginRight: 24,
      marginLeft: 24,
    },
    text: {
      color: '#808080',
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 48,
      alignSelf: 'center',
    },
    sub: {
      color: '#808080',
      fontSize: 14,
      alignSelf: 'center',
    },
    listEmptyText: {
      color: '#FFF',
      fontSize: 14,
      textAlign: 'center',
    }
  });