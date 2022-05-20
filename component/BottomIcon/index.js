import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { IconAddSaldo, IconAddPoint, IconKiloan, IconSatuan, IconVIP, IconKarpet, IconSetrika, IconExpress } from '../../Assets'
import { Warna_Sekunder } from '../../Utils/constant';

const ButtonIcon = ({title, type}) => {
    const Icon = () =>{
        if(title === "Add Saldo") return <IconAddSaldo/>;

        if(title == "Add Point") return <IconAddPoint/>;

        if(title == "Kiloan") return <IconKiloan/>;

        if(title == "Satuan") return <IconSatuan/>;

        if(title == "VIP") return <IconVIP/>;

        if(title == "Karpet") return <IconKarpet/>;

        if(title == "Setrika Saja") return <IconSetrika/>;

        if(title == "Express") return <IconExpress/>;

        return <IconAddSaldo />
    }


  return (
    <TouchableOpacity style={styles.container(type)}>
        <View style={styles.icon(type)}>
            <Icon />
        </View>
        <Text style={styles.kata(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
    container: (type) => ({
        marginBottom: type === "layanan" ? 12 : 0,
        marginRight: type === "layanan" ? 30 : 0
    }),
    icon: (type) => ({
        backgroundColor: Warna_Sekunder,
        padding: type === "layanan" ? 12 : 7,
        borderRadius: 10
    }),
    kata: (type) => ({
        fontSize: type === "layanan" ? 14 : 10,
        fontFamily: type === "layanan" ? 'TitilliumWeb_Light' : 'TitilliumWeb_Regular',
        textAlign: 'center'
    })
});
