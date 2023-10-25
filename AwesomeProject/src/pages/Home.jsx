import { View, Text, style, Image } from 'react-native'
import React from 'react'

const Home = () => {
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
        source={require('../assets/image/logomhs.png')}/>

        <View style={{height: 23, width: 95, borderRadius: 40}}>
        <Image resizeMode="contain" style={{height: 25, width: 150}}
        source={require('../assets/image/LOGO.png')}/>

        </View>
      </View>

      <View style={{marginHorizontal: 16, marginTop: 32}}>
        <Text style={{marginBottom: 4}}>Selamat Datang di</Text>
        <Text style={{fontSize: 32, color: 'black', fontWeight: 'bold', marginBottom: 32}}>Kantin Multistudi</Text>
        <Text style={{fontSize: 14, color: 'black', fontWeight: 'italic'}}>Menu Makanan</Text>
      </View>
    
      <View style={{
        flexDirection: 'row',

      }}>
          <View style={{
            padding:12,
            flex: 1,
            
          }}>
            {/* image */}
            <View style={{
             height: 10, width: 100, borderRadius: 40
            }}/>
            <Image resizeMode="contain" style={{height: 200, width: 180, borderRadius: 12}}
        source={require('../assets/image/burger.jpg')}/>
            
            <Text style={{fontWeight: 'bold', color: 'black'}}>Chesee Burger</Text>
            <Text style={{color: 'red'}}>Rp. 13.000</Text>
          </View>
          
          <View style={{
            padding:12,
            flex: 1
          }}>
            
            {/* image */}
            <View style={{
              height: 10, width: 100, borderRadius: 40
            }}/>
            
             <Image resizeMode="contain" style={{height: 200, width: 180, borderRadius: 12}}
        source={require('../assets/image/ramen.jpg')}/>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Curry Ramen</Text>
            <Text style={{color: 'red'}}>Rp. 16.000</Text>
          </View>
        </View>
        <View style={{margin: 16}}>
        <Text style={{fontSize: 14, color: 'black', fontWeight: 'italic'}}>Menu Minuman</Text>
      </View>

      <View style={{
        flexDirection: 'row',

      }}>
          <View style={{
            padding:12,
            flex: 1,
            
          }}>
            {/* image */}
            <View style={{
             height: 10, width: 100, borderRadius: 40
            }}/>
            <Image resizeMode="contain" style={{height: 200, width: 180, borderRadius: 12}}
        source={require('../assets/image/mojito.jpg')}/>
           <Text style={{fontWeight: 'bold', color: 'black'}}>Mojito Lime</Text>
            <Text style={{color: 'red'}}>Rp. 10.000</Text>
          </View>
          
          <View style={{
            padding:12,
            flex: 1
          }}>
            {/* image */}
            <View style={{
              height: 10, width: 100, borderRadius: 40
            }}/>
            <Image resizeMode="contain" style={{height: 200, width: 180, borderRadius: 12}}
        source={require('../assets/image/orange.jpg')}/>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Orange Juice</Text>
            <Text style={{color: 'red'}}>Rp. 8.000</Text>
          </View>
        </View>

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
      }}></View>


    </View>


  )
}

export default Home;