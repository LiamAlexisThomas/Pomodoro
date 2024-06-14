import { StyleSheet, Text , View} from "react-native";

export default visor = ({tiempo}) => {
  const tiempoConFormato = `${Math.floor(tiempo/60)
    .toString()
    .padStart(2,"0")} : ${(tiempo%60)
    .toString()
    .padStart(2,"0")}`;

    return (
        <View style={styles.contenedor}>
          <Text style={styles.texto}>{tiempoConFormato}</Text>
        </View>
      );
}

  const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#E2E2F0",
    flex: 0.4,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center", //Centra los objetos de manera horizontal
  },
  texto: {
    fontSize: 65,
    fontWeight: "bold",
    textAlign: "center"
  }
})