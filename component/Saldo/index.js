import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { Warna_Utama } from '../../Utils/constant';
import ButtonIcon from '../BottomIcon';
import Gap from '../Gap';
const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.informasi}>
        <View style={styles.kata}>
            <Text style={styles.saldo}>Saldo : </Text>
            <Text style={styles.nilai}>Rp 100.000</Text>
         </View>
        <View style={styles.kata}>
            <Text style={styles.poin}>Point : </Text>
            <Text style={styles.nilaiP}>100 point</Text>
        </View>
      </View>
      <View style={styles.tombol}>
        <ButtonIcon title="Add Saldo"/>
        <Gap width={10}/>
        <ButtonIcon title="Add Point"/>
      </View>
    </View>
  );
};

export default Saldo;

const windowsWidht = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        marginHorizontal: 30,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        marginTop: -windowsHeight*0.08,
        flexDirection: 'row'
    },
    kata: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    informasi: {
        width: '60%'
    },
    saldo: {
        fontSize: 20,
        fontFamily: 'TitilliumWeb-Regular'
    },
    nilai: {
        fontSize: 20,
        fontFamily: 'TitilliumWeb-Bold'
    },
    poin: {
        fontSize: 12,
        fontFamily: 'TitilliumWeb-Regular'
    },
    nilaiP: {
        fontSize: 12,
        fontFamily: 'TitilliumWeb-Bold',
        color: Warna_Utama
    },
    tombol: {
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent: 'flex-end',
        flex: 1
    }
});
