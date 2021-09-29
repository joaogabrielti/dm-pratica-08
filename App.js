import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import api from './src/services/api'
import styles from './styles'

function App() {
    const API_KEY = '8e9bd97e67a202741ff5'
    const [currencies, setCurrencies] = useState([])
    const [convertedValue, setConvertedValue] = useState(0)
    const [value, setValue] = useState('0');
    const [from, setFrom] = useState('USD');
    const [to, setTo] = useState('BRL');
    const [isLoading, setIsLoading] = useState(true)

    const showApp = () => {
        if (isLoading) {
            return <ActivityIndicator style={{height: 50}} size="large" color="#1565c0"/>
        } else {
            return (
                <View>
                    <View style={styles.input}>
                        <Text style={styles.inputText}>Moeda de Origem: {from}</Text>
                        <Picker style={styles.picker} selectedValue={from} onValueChange={(item, index) => setFrom(item)}>
                            {Object.keys(currencies).map((item, index) => {
                                return (<Picker.Item key={index} value={currencies[item].id} label={currencies[item].currencyName} />)
                            })}
                        </Picker>
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.inputText}>Moeda de Destino: {to}</Text>
                        <Picker style={styles.picker} selectedValue={to} onValueChange={(item, index) => setTo(item)}>
                            {Object.keys(currencies).map((item, index) => {
                                return (<Picker.Item key={index} value={currencies[item].id} label={currencies[item].currencyName} />)
                            })}
                        </Picker>
                    </View>
                    <View style={styles.input}>
                        <TextInput style={styles.textInput} keyboardType="numeric" placeholder="valor para conversão" value={value} onChangeText={(text) => setValue(text)}/>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => convert()}>
                        <Text style={styles.btnText}>Converter</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    const convert = () => {
        let amount = 0
        try {
            amount = Number.parseFloat(value)
        } catch (error) {
            alert('Digite um número válido.')
            return
        }

        setIsLoading(true)
        const query = `${from}_${to}`
        api.get(`convert?q=${query}&compact=ultra&apiKey=${API_KEY}`).then((response) => {
            const val = Number.parseFloat(response.data[query])
            const total = val * amount
            setConvertedValue(total)
            setIsLoading(false)
        }).catch((error) => {
            alert('Ocorreu um erro ao conectar com a API! Tente novamente.')
            setIsLoading(false)
            console.log(error)
        })
    }

    useEffect(() => {
        if (Object.keys(currencies).length <= 0) {
            api.get(`currencies?apiKey=${API_KEY}`).then((response) => {
                setCurrencies(response.data.results)
                setIsLoading(false)
            }).catch((error) => {
                alert('Ocorreu um erro ao conectar com a API! Tente novamente.')
                console.log(error)
            })
        }
    })

    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerText}>Conversor de Moedas</Text>
            </View>
            <View style={styles.currency}>
                <Text style={styles.currencyText}>{convertedValue.toFixed(2)}</Text>
            </View>
            { showApp() }
        </ScrollView>
    )
}

export default App