import { Platform, SafeAreaView, View , StyleSheet} from "react-native"
import Tabs from "../componentes/tabs";
import Visor from "../componentes/visor";
import Boton from "../componentes/boton";
import { useEffect, useState } from "react";
import {Audio} from "expo-av";

export default Principal = ()=> {
    const colores = ["#7E9ECF", "#9F87C4", "#2F5F59"];

    async function playSonido() {
        const {sound} = await Audio.Sound.createAsync(require('../../assets/Audios/alarma.mp3'));
        await sound.playAsync();
      }
    const [seleccion , setSeleccion] =  useState("P" | "S" | "L");
    const [tiempo, setTiempo] = useState(25*60)
    const [activo, setActivo] = useState(false)
    
    useEffect(() => {
        let interval = null;
        if (activo){
            interval = setInterval(() => {
                setTiempo(tiempo - 10)
            }, 1)
        } else {
            clearInterval(interval);
        }
        if (tiempo === 0){
            setActivo(false);
            setTiempo(seleccion == 0 ? 1500 : seleccion == 1 ? 900 : 300);
            playSonido()
        }
        return ()  => clearInterval(interval)
    },[tiempo, activo])

    return(
        <SafeAreaView style = {[styles.container, {backgroundColor: colores[seleccion]} ]}>
            <View style = {{flex: 1, paddingHorizontal: 15, paddingTop : Platform.OS === 'android' && 70}}>
                <Tabs seleccion={seleccion} setSeleccion ={setSeleccion} setTiempo={setTiempo} setActivo={setActivo} />
                <Visor tiempo={tiempo}/>
                <Boton setActivo={setActivo} activo = {activo}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    principal : {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 40,
        
    }
})