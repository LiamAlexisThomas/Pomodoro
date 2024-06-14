import { Text , View, StyleSheet, TouchableOpacity} from "react-native";
import {Audio} from "expo-av";

export default boton = (props) => {
  const {activo, setActivo} = props;

  const handleComenzar = () =>{
    setActivo(!activo);
    playSonido() 
  }
  
  async function playSonido() {
    const {sound} = await Audio.Sound.createAsync(require('../../assets/Audios/click.mp3'));
    await sound.playAsync();
  }
    return (
        <TouchableOpacity style={style.boton} onPress={handleComenzar} >
          <Text style={style.texto}> {activo ? "Detener" : "Empezar"}</Text>
        </TouchableOpacity>
      );
}

const style = StyleSheet.create({
  boton: {
    backgroundColor: "#E2E2F0",
    height: 50,
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontWeight: "bold",
    fontSize: 20
  },

})