import { Text , TouchableOpacity, View , StyleSheet} from "react-native";

export default tabs = (props) => {
    const {seleccion, setSeleccion, setTiempo, setActivo} = props;
    const opciones = ["Pomodoro" ,  "Descanso" , "Descancito"];

    const handlePress=(index)=>{
        setSeleccion(index);
        const nuevotiempo =  index === 0 ? 25 : index === 1 ? 15 : 5;
        setSeleccion(index, nuevotiempo);
        setTiempo(nuevotiempo * 60);
        setActivo(false);
    };


    return (
        <View style = {{flexDirection: 'row'}}>
            {opciones.map((item , index) => (
                <TouchableOpacity key = {index} style = {[styles.botones, seleccion!== index && {backgroundColor: "transparent"}]} onPress={()=> handlePress(index)}>
                    <Text>
                        {item}
                    </Text>
                </TouchableOpacity>
            ))} 
        </View>
      );
};

const styles = StyleSheet.create({
    botones: {
        backgroundColor: "#E2E2F0",
        width: "29%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 3,
        marginLeft: 10,
        borderRadius: 5,
    }
})