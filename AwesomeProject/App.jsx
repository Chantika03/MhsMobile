import { View, Text, style, Image } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        alignItems: 'center',
        backgroundColor: 'red',
        marginHorizontal: 16,
        marginTop: 16,
        padding: 16,
        borderRadius: 40
      }}>
        <Image resizeMode="contain" style={{height: 40, width: 150}}
        source={require('./src/assets/image/logomhs.png')}/>

        <View style={{height: 23, width: 95, borderRadius: 40}}>
        <Image resizeMode="contain" style={{height: 25, width: 150}}
        source={require('./src/assets/image/LOGO.png')}/>

        </View>
      </View>

      <View style={{margin: 16}}>
        <Text>Selamat Datang di</Text>
        <Text style={{fontSize: 32, color: 'black', fontWeight: 'bold'}}>Kantin Multistudi</Text>
      </View>
    
      <View style={{
        flexDirection: 'row',

      }}>
          <View style={{
            borderWidth: 1,
            padding:12,
            flex: 1,
            
          }}>
            {/* image */}
            <View style={{
              height: 200,
              backgroundColor: 'red'
            }}/>
            <Text>Chesee Burger</Text>
            <Text>Rp. 15.000</Text>
          </View>
          
          <View style={{
            borderWidth: 1,
            padding:12,
            flex: 1
          }}>
            {/* image */}
            <View style={{
              height: 200,
              backgroundColor: 'red'
            }}/>
            <Text>Curry Ramen</Text>
            <Text>Rp. 20.000</Text>
          </View>
        </View>


    </View>


  )
}

export default App