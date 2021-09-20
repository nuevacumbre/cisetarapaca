import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Text style={{color: colors.text}}>Pantalla de inicio</Text>
      <Button
        title="Ir a la pantalla de detalles"
        onPress={() => navigation.navigate('Details')}
      />
      <View style={{backgroundColor:'#EFF93C', borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, padding: 10}}>
        <Text style={{color:'black', fontSize: 32, }}>SEREMI TARAPACA - Departamento CISE (Centro de Investigación y Seguimiento Epidemiológico</Text>
      </View>
      </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
