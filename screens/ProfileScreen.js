import React from 'react';
import {View, Text, Button, StyleSheet, Image, SafeAreaView, Linking} from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';  se instala y no funciona
//import AsyncStorage from '@react-native-community/async-storage'; ya instalado
//import CameraComponent from './src/cameraComponent';Platform

const ProfileScreen = () => {
  return (
    <>
    <SafeAreaView style={{backgroundColor:'white'}}>

      <Text>Profile Screen</Text>
      <Button
      title="Capturar Foto"
      onPress={() => alert('ACTIVAR CAMARA')}
      />

    <View style={{backgroundColor:'silver', borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, padding: 100}}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10,}}>
          <View style={{justifyContent: 'flex-start',}}>
            <Text style={{color:'white', fontSize: 42, fontWeight: 'bold', }}>Christopher Espinoza</Text>
            <Text style={{color:'white', fontSize: 24, justifyContent: 'flex-end',}}>christopher.espinoza@redsalud.gob.cl</Text>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
              <Image 
              style={{
                width: 200,
                height: 200,
                borderRadius: 100,
              }}
                resizeMode="cover"
                source={{uri:"https://holatelcel.com/wp-content/uploads/2020/09/instagram-foto-de-perfil-4.jpg"}}
              />
          </View>
    </View>

    <View>
      <View style={{ flexDirection: 'column', justifyContent: 'space-around', padding: 10,}}>
        <Text style={{color:'gray', fontSize: 22,}}>Teléfono</Text>
        <Text style={{color:'black', fontSize: 26,}}>+56939217672</Text>
        <Text
    style={{marginTop:30}}
    onPress={() => {
        Linking.openURL(
          'https://api.whatsapp.com/send/?phone=56939217672&text=Saludos,%20este%20mensaje%20es%20enviado%20desde%20la%20APP%20CISE%20TARAPACA&app_absent=0'
        );
    }}>
    Enviar Mensaje a WhatsApp
</Text>
      </View>
    </View>

</View>  
</SafeAreaView>
</>  
  );
};



/****/
/******
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value)
  } catch (e) {
    // saving error
  }
}

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null) {
      // value previously stored
    }
  } catch(e) {
    // error reading value
  }
}
*******/

/*********************************
function useDatos() {
  const [perfil, setPerfil] = useState([])
 
  useEffect(() => {
    fetch("json/perfil.json")
      .then(response => response.json())
      .then(datos => {
        setPerfil(datos)
      })
  }, [])
 
  return perfil
} 

export default function Datos() {
 
  const perfil = useDatos()
 
  return (
 
         // Acá los datos del archivo perfil.json
 
         )
}


export default function Datos() {
 
  const postres = useDatos()
 
  return (



//crear modulo similar para imprimir los campos de perfil.json
            <tbody>
            {postres.map(item => (
 
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.correo}</td>
                <td>{item.telefono}</td>
                <td><img src={`${process.env.PUBLIC_URL}/imagenes/${item.img}`} alt={item.nombre} width="30px" className="img-fluid"/></td>
              </tr>
 
            ))}
 
            </tbody>


      )
}
*********************************/

export default ProfileScreen;

//export default class App extends Component{
//  render(){
//    return <CameraComponent></CameraComponent>
//  }
//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
