import { Dimensions, ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { GambarHeader, Logo } from '../../Assets';
import Saldo  from '../../component/';
import ButtonIcon from '../../component/BottomIcon';
import Warna_Pesanan from '../../Utils/constant';
import ScrollView from 'react-native-gesture-handler';
import Pemberitahuan from '../../component/Pemberitahuan';

const Homescreen = () => {
  return (
    <View style={styles.page}>

      <ScrollView showsVertikalScrollIndicator={false}>

      <ImageBackground source={GambarHeader} style={styles.header}>

        <Image source={Logo} style={styles.logo} />
        <View style={styles.hello}>
          <Text style={styles.selamat}>
            Selamat Datang, 
          </Text>
          <Text style={styles.userName}>
           Rian
          </Text>
        </View>
      </ImageBackground>

      <Saldo />
      
      <View style={styles.layanan}>
        <Text style={styles.kata}>Layanan Kami</Text>
        <View style={styles.IconLayanan}>
          <ButtonIcon title="Kiloan" type="layanan"/>
          <ButtonIcon title="Satuan" type="layanan"/>
          <ButtonIcon title="VIP" type="layanan"/>
          <ButtonIcon title="Karpet" type="layanan"/>
          <ButtonIcon title="Setrika Saja" type="layanan"/>
          <ButtonIcon title="Express" type="layanan"/>
        </View>
      </View>

      <View style={styles.PesananAktif}>
        <Text style={styles.kata}>Pesanan Aktif</Text>
        <Pemberitahuan />
      </View>

      </ScrollView>

    </View>
  );
};

export default Homescreen;

const windowsWidht = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    width: windowsWidht,
    height: windowsHeight*0.30,
    paddingHorizontal: 30,
    paddingTop: 10
  },
  logo: {
    width: windowsWidht*0.4,
    height: windowsHeight*0.06
  },
  hello: {
    marginTop: windowsHeight*0.03,

  },
  selamat: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Regular'
  },
  userName: {
    fontSize: 22,
    fontFamily: 'TitilliumWeb-Bold'
  },
  layanan: {
    paddingLeft: 30,
    paddingTop: 10
  },
  kata: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold'
  },
  IconLayanan: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap'
  },
  PesananAktif: {
    padding: 10,
    paddingHorizontal: 30,
    backgroundColor: Warna_Pesanan,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  }
});
