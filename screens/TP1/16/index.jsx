import { View, Text, ScrollView, StyleSheet} from 'react-native';

export default function App() {
    return (
        <ScrollView  style={styles.container}>
            <Text style={styles.titulo}>A Arquitetura de uma Aplicação React Native</Text>
            <Text>
                A arquitetura de uma aplicação React Native é um tema de grande relevância no desenvolvimento de aplicativos móveis, especialmente em um mundo cada vez mais digitalizado. O React Native, framework desenvolvido pelo Facebook, permite a criação de aplicações móveis utilizando JavaScript e a mesma base de código para iOS e Android, promovendo eficiência e agilidade no desenvolvimento. Neste texto, discutiremos a estrutura básica de uma aplicação React Native, suas principais características e faremos uma comparação com a arquitetura do React, a biblioteca que serve como base para o React Native.
            </Text>
            <Text style={styles.titulo}>Estrutura de uma Aplicação React Native</Text>
            <Text>
                Uma aplicação React Native é composta por vários componentes que podem ser reutilizados em diferentes partes do aplicativo. Esses componentes são escritos em JavaScript e podem ser agrupados para formar interfaces complexas. A arquitetura do React Native segue um padrão unidirecional de dados, ou seja, os dados fluem de cima para baixo, do componente pai para os filhos. Isso facilita a compreensão do fluxo de dados e a manutenção do código, permitindo que os desenvolvedores tenham um controle mais claro sobre o estado da aplicação.
                {'\n\n'}
                Além disso, o React Native utiliza um sistema de navegação que possibilita a criação de múltiplas telas dentro de um aplicativo. Bibliotecas como react-navigation oferecem ferramentas para implementar uma navegação fluida, seja por meio de pilhas de navegação, abas ou menus. A integração de bibliotecas externas também é uma característica marcante do React Native, permitindo que desenvolvedores adicionem funcionalidades adicionais, como acesso à câmera ou geolocalização, sem complicações.
                {'\n\n'}
                Outro aspecto fundamental na arquitetura de uma aplicação React Native é a utilização de estilos. Ao invés de usar CSS tradicional, o React Native utiliza um sistema de estilo baseado em objetos JavaScript, que facilita a personalização e a responsividade das interfaces. Isso torna o processo de estilização mais coeso, uma vez que todos os estilos estão encapsulados no código JavaScript, proporcionando uma maior agilidade na construção de interfaces adaptativas.</Text>
            <Text style={styles.titulo}>Comparação com o React</Text>
            <Text>
                Embora o React Native compartilhe muitos conceitos com o React, como a estrutura de componentes e o uso do estado, existem diferenças significativas entre as duas tecnologias. O React é focado no desenvolvimento de interfaces web, enquanto o React Native é voltado para a criação de aplicativos móveis. Isso implica que, enquanto o React lida com o DOM (Document Object Model) da web, o React Native se comunica diretamente com componentes nativos, como botões e listas, usando uma camada de abstração que traduz as definições de estilo e comportamentos.
                {'\n\n'}
                Além disso, as bibliotecas de navegação também diferem entre as duas plataformas. No React, as rotas são gerenciadas através de bibliotecas como o react-router, enquanto no React Native, a navegação é tratada por bibliotecas específicas que otimizam a experiência do usuário em dispositivos móveis. Portanto, o entendimento das particularidades de cada framework é essencial para o desenvolvimento eficaz de aplicações.</Text>
            <Text style={styles.titulo}>Conclusão</Text>
            <Text>
                Em síntese, a arquitetura de uma aplicação React Native é estruturada em componentes reutilizáveis, navegação fluida e um sistema de estilo baseado em objetos, permitindo que desenvolvedores criem aplicações móveis eficientes e responsivas. A comparação entre React e React Native destaca as semelhanças em seus conceitos fundamentais, mas também ressalta as diferenças que surgem devido às suas aplicações distintas em web e dispositivos móveis. À medida que o uso de aplicativos móveis continua a crescer, a compreensão da arquitetura do React Native torna-se ainda mais crucial para desenvolvedores que buscam criar experiências de usuário ricas e funcionais.
            </Text>
            <Text style={styles.titulo}>Referências</Text>
            <Text>
                BIRGEL, Eduardo. Desenvolvimento de Aplicações com React Native. São Paulo: Novatec, 2018.
                {'\n\n'}
                HOLZ, André. React Native: Desenvolvendo Aplicações Móveis com JavaScript. Rio de Janeiro: Casa do Código, 2019.
                {'\n\n'}
                React Native Documentation. Available at: https://reactnative.dev/docs/getting-started. Accessed on: 28 Oct. 2024.
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
      },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
      },
  });