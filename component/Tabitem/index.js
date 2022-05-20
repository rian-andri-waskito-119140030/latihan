import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Iconhomeaktif, Iconhomemati, Iconpesanan, Iconpesananactive, Iconakun, Iconakunactive } from '../../Assets'
import { Warna_Utama, Warna_Disable } from '../../Utils/constant';
;


const Tabitem = ({isFocused, onPress, onLongPress, label}) => {
    const Icon = () => {
        if(label==='Homescreen') return isFocused ? <Iconhomeaktif/> : <Iconhomemati/>
        if(label==='Pesanan') return isFocused ? <Iconpesananactive/> : <Iconpesanan/>
        if(label==='Akun') return isFocused ? <Iconakunactive/> : <Iconakun/>

        return <Iconhomeaktif/>
    }
  return (
    <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.container}>
        <Icon/>
        <Text style={styles.kata(isFocused)}>
        {label}
        </Text>
        </TouchableOpacity>
  );
};

export default Tabitem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    kata: (isFocused) =>({
        fontSize: 13,
        color: isFocused ? Warna_Utama : Warna_Disable,
        marginTop: 8 
    })
});
