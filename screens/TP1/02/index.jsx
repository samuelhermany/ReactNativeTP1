import { View, Text } from 'react-native';

export default function App() {
    const seuNomeCompleto = "Samuel Hermany";
    const horaAtual = () => {
        const time = new Date();
        return time.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            hourCycle: 'h23',
            timeZone: 'America/Sao_Paulo'
        });
    };

    const texto = `Olá, ${seuNomeCompleto}! Agora são ${horaAtual()}`
    return (
        <View>
            <Text>{texto}</Text>
        </View>
    )
}