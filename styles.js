import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#2e7d32',
        padding: 16,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    currency: {
        backgroundColor: '#e0e0e0',
        padding: 16,
        marginBottom: 16,
    },
    currencyText: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#66bb6a',
    },
    input: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    inputText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    picker: {
        width: '80%',
        marginBottom: 8,
        backgroundColor: '#eeeeee',
    },
    textInput: {
        width: '80%',
        backgroundColor: '#eeeeee',
        borderRadius: 5,
        marginBottom: 8,
        textAlign: 'center',
    },
    btn: {
        backgroundColor: '#2e7d32',
        width: '80%',
        padding: 12,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 8,
    },
    btnText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 18,
    },
})

export default styles