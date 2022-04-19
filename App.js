import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from 'react-native-elements';
import { ListItem, Avatar } from 'react-native-elements';
import { Icon } from 'react-native-elements';


function ChangeContact(){
  const navigation = useNavigation();
  return(
    <LinearGradient
        colors={['#22c1c3', '#62fd2d']}
        style={{flex: 1}}
      >
    
    <Header style={styles.headerStyle} 
    
    leftComponent={{  icon: 'arrow-left', type: "font-awesome", color: '#fff', iconStyle: { color: '#fff' },  onPress: () => navigation.navigate('Logged'),}}  
    centerComponent={{ text: 'Editar Contato', style: { color: '#fff', fontSize:25 } }}
    />

    <Image style={styles.imageSignUp} source={require("./assets/UserIcon.png")} />
      <View style={styles.container}>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#545455"
          placeholder="Nome"
        
        />
    </View>
 
    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#545455"
          placeholder="Email"
         
        />
    </View>

    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#545455"
          placeholder="Telefone"
        />
        
    </View>

    <TouchableOpacity style={styles.signUpBtn} onPress={()=>navigation.navigate('Logged')}>
        <Text style={styles.loginText}>Alterar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.signUpBtn} onPress={()=>navigation.navigate('Logged')}>
        <Text style={styles.loginText}>Deletar</Text>
    </TouchableOpacity>
</View>
       
      </LinearGradient>
    
    )


}


function CreateContact(){
  const navigation = useNavigation();
  return(
    <LinearGradient
        colors={['#22c1c3', '#62fd2d']}
        style={{flex: 1}}
      >
    
    <Header style={styles.headerStyle} 
    
    leftComponent={{  icon: 'arrow-left', type: "font-awesome", color: '#fff', iconStyle: { color: '#fff' },  onPress: () => navigation.navigate('Logged'),}}
    centerComponent={{ text: 'Contato', style: { color: '#fff', fontSize:25 } }}
    />

  <Image style={styles.imageSignUp} source={require("./assets/UserIcon.png")} />
        <View style={styles.container}>
          

        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#545455"
          placeholder="Nome"
        
        />
    </View>
 
    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#545455"
          placeholder="Email"
         
        />
    </View>

    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#545455"
          placeholder="Telefone"
        />
        
    </View>
    <TouchableOpacity style={styles.signUpBtn} onPress={()=>navigation.navigate('Logged')}>
        <Text style={styles.loginText}>Salvar</Text>
    </TouchableOpacity>

  </View>
       
      </LinearGradient>
    
    )
}
 

function Logged(){
  const navigation = useNavigation();

  const list = [
    {
      name: 'Vinicius Rodrigues',
      avatar_url: 'https://cdn-icons-png.flaticon.com/512/1373/1373255.png',
      telephone: '81 985895228'
    },
    {
      name: 'Elon Musk',
      avatar_url: 'https://i.pinimg.com/originals/0f/53/82/0f5382103123a0c46be713b692cc6f1d.jpg',
      telephone: '81 985899999'
    }
  ]
  
return(

  
<LinearGradient
    colors={['#22c1c3', '#62fd2d']}
    style={{flex: 1}}
  >

    

        <Header style={styles.headerStyle} 

        rightComponent={{  icon: 'plus', type: "font-awesome", color: '#fff', iconStyle: { color: '#fff' },  onPress: () => navigation.navigate('CreateContact'),}} 
        centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff', fontSize:25 } }}
        />


<View>
  {
    list.map((l, i) => (
      <ListItem onPress={()=>navigation.navigate('ChangeContact')} key={i} bottomDivider> 
        <Avatar  source={{uri: l.avatar_url}} />
        <ListItem.Content  >
          <ListItem.Title >{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.telephone}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
</View>
   
  </LinearGradient>

)


}



function SignUp(){
  const navigation = useNavigation();
  return(
  

    

    <LinearGradient
    colors={['#22c1c3', '#62fd2d']}
    style={{flex: 1}}
  >




  <Header style={styles.headerStyle} 

      leftComponent={{  icon: 'arrow-left', type: "font-awesome", color: '#fff', iconStyle: { color: '#fff' },  onPress: () => navigation.navigate('Login'),}} 
      centerComponent={{ text: 'Cadastro', style: { color: '#fff', fontSize:25 } }}
  />
  
  <Image style={styles.imageSignUp} source={require("./assets/UserIcon.png")} />
  
  <View style={styles.container}>

 
    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#545455"
          placeholder="Email"
        
        />
    </View>
 
    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#545455"
          placeholder="Nome"
         
        />
    </View>

    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#545455"
          placeholder="Senha"
          secureTextEntry={true}
         
        />
        
    </View>
    <TouchableOpacity style={styles.signUpBtn} onPress={()=>navigation.navigate('Logged')}>
        <Text style={styles.loginText} >Salvar</Text>
    </TouchableOpacity>
    
  </View>
  </LinearGradient>

  );
}
function Login() {
  const navigation = useNavigation();
 
 
  return (
    
    <LinearGradient
    colors={['#22c1c3', '#62fd2d']}
    style={{flex: 1}}
   
  >
    <View style={styles.container} >

    
    
    <Image style={styles.image} source={require("./assets/vlogo.png")} />
      <Text style={styles.textTelaLogin}>Tela de Login</Text>
      <StatusBar style="auto" />
      <Text style={styles.upInput}>Email</Text>
      <View style={styles.inputView}>
        
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
         
        />
      </View>
      <Text style={styles.upInput}>Senha</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
         
        />
    </View>
  
  
     <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('Logged')}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.signUpBtn} onPress={()=>navigation.navigate('SignUp')}
      >
        <Text style={styles.loginText}>Cadastre-se</Text>
      </TouchableOpacity>
      

      
    </View>
    </LinearGradient>
  );
}
const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name="Logged" component={Logged} options={{ headerShown: false }}/>
        <Stack.Screen name="CreateContact" component={CreateContact} options={{ headerShown: false }}/>
        <Stack.Screen name="ChangeContact" component={ChangeContact} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundLogged: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"fff",
  },
  upBar:{
   justifyContent:"center",
   
  },
  textUpBar:{
    marginTop:-20,
    justifyContent:"center",
    alignSelf:"center",
  },
  imageBackLogo: {
    width:50,
    height:50,
    marginLeft:30,
    marginTop:50,

  },
  headerStyle:{
   

  },
  image: {
    marginTop: -25,
    alignSelf:"center",
    width:235,
    height:125,
  },
  imageSignUp: {
    marginTop: 120,
    marginBottom:-200,
    alignSelf:"center",
    width:120,
    height:120,
  },

  textTelaLogin: {
    fontFamily: "cursive",
    fontSize:20,
    fontWeight: "bold",
   textAlign: "center",
   marginBottom:20,
  },
  upInput: {
    marginRight:190,
   
   },
   loginText:{
    fontFamily: "cursive",
    fontWeight: "bold",
   },
  inputView: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 20,
    width: "70%",
    height: 45,
    marginBottom: 15,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  loginBtn: {  
    width: "80%",
    borderRadius: 25,
    height: 50,
    borderStyle: "solid",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#fff",
  },
  signUpBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    borderStyle: "solid",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    backgroundColor: "#fff",
  },


});