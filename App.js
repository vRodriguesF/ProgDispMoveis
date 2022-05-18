import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import { Header } from 'react-native-elements';
import { ListItem, Avatar } from 'react-native-elements';
import { Icon } from 'react-native-elements';


function ChangeContact({route}){
  const navigation = useNavigation({route});

    const [getNome,setNome] = useState();
    const [getEmail,setEmail] = useState();
    const [getTelefone,setTelefone] = useState();
    const [getCpf,setCpf] = useState();
    const [getId,setId] = useState();
    const [getAlterar,setAlterar] = useState();

  useEffect(()=>{
    if(route.params){
          const { nome } =  route.params 
          const { telefone } =  route.params 
          const { email } =  route.params 
          const { id } =  route.params
          const { cpf } =  route.params
          const { alterar } =  route.params

          setNome(nome)
          setTelefone(telefone)
          setCpf(email)
          setId(id)
          setAlterar(alterar)
          setCpf(cpf)

    }
  },[])  

  async function alterarDados(){
    await axios.put('http://professornilson.com/testeservico/clientes/'+getId,{
     nome:getNome,
     email:getEmail,
     telefone:getTelefone,
     cpf: getCpf,  
    }
    )
    .then(function (response) {
        showMessage({
            message: "Registro alterado com sucesso!",
            type: "success",
          });
      console.log(response);
    })
    .catch(function (error) {
        showMessage({
            message: "Algum erro aconteceu!",
            type: "info",
          });
        console.log(error);
    });
}
function excluirDados(){
  axios.delete('http://professornilson.com/testeservico/clientes/'+getId
 )
 .then(function (response) {
     setNome('')
     setTelefone('')
     setCpf('')
     showMessage({
         message: "Registro excluído com sucesso!",
         type: "success",
       });
   console.log(response);
 })
 .catch(function (error) {
     showMessage({
         message: "Algum erro aconteceu!",
         type: "info",
       });
     console.log(error);
 });
}
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
          onChangeText={text => setNome(text)}
            value={getNome} 
        
        />
    </View>
 
    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#545455"
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={getEmail}
         
        />
    </View>

    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#545455"
          placeholder="Telefone"
          onChangeText={text => setTelefone(text)}
          value={getTelefone}
        />
    </View>
    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#545455"
          placeholder="CPF"
          onChangeText={text => setCpf(text)}
          value={getCpf}
        />   
    </View>

    <TouchableOpacity style={styles.signUpBtn} onPress={()=> alterarDados()}>
        <Text style={styles.loginText}>Alterar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.signUpBtn} onPress={()=>excluirDados()}>
        <Text style={styles.loginText}>Deletar</Text>
    </TouchableOpacity>
</View>
       
      </LinearGradient>
    
    )


}


function CreateContact({route}){
  const navigation = useNavigation();

  const [getNome,setNome] = useState();
  const [getTelefone,setTelefone] = useState();
  const [getEmail, setEmail] = useState();
  const [getCpf, setCpf] = useState();


  useEffect(()=>{
    if(route.params){
        const { nome } =  route.params 
        const { telefone } =  route.params 
        const { email } =  route.params 
        const { cpf } =  route.params 
        
    
        

        setNome(nome)
        setTelefone(telefone)  
        setEmail(email)
        setCpf(cpf)
        
     
    }

   
},[]) 
async function inserirDados(){
        
  axios.post('http://professornilson.com/testeservico/clientes', {
      nome: getNome,
      telefone: getTelefone,
      email: getEmail,
      cpf: getCpf
    })
    .then(function (response) {
      setNome('');
      setEmail('');
      setTelefone('');
      setCpf(''); 
      showMessage({
          message: "Registro Cadastrado com sucesso",
          type: "success",
        }); 
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });     
  
}

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
          onChangeText={text => setNome(text)}
            value={getNome}
        
        />
    </View>
 
    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#545455"
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={getEmail}
         
        />
    </View>

    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#545455"
          placeholder="Telefone"
          onChangeText={text => setTelefone(text)}
          value={getTelefone}
        />   
    </View>

    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#545455"
          placeholder="CPF"
          onChangeText={text => setCpf(text)}
          value={getCpf}
        />   
    </View>


    <TouchableOpacity style={styles.signUpBtn} onPress={()=>inserirDados()}>
        <Text style={styles.loginText}>Salvar</Text>
    </TouchableOpacity>

  </View>
       
      </LinearGradient>
    
    )
}
 

function Logged({route}){
  const navigation = useNavigation();
  const [getData, setData] = useState([]);

  useEffect(()=>{
        
    async function resgatarDados(){
        const result = await axios(
            'http://professornilson.com/testeservico/clientes',
          );
          setData(result.data);
    }
    resgatarDados();
})

 
  
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
    getData.map((l, i) => (
      <ListItem onPress={()=>navigation.navigate('ChangeContact',{ 
      nome: l.nome,
           telefone:l.telefone,
           cpf:l.cpf,
           id:l.id,
           alterar:true,
           })} key={i} bottomDivider> 
        <Avatar  source={{uri: "https://s3-nftrend-storage.s3.sa-east-1.amazonaws.com/wp-content/uploads/2021/09/21154402/The-Derp.png"}} />
        <ListItem.Content  >
          <ListItem.Title >{l.nome}</ListItem.Title>
          <ListItem.Subtitle>{l.cpf}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
</View>
   
  </LinearGradient>

)


}



function SignUp({route}){
  const navigation = useNavigation();
  const[email, setEmail] = useState('')
  const[senha, setSenha] = useState('')

  const firebaseConfig = {
    apiKey: "AIzaSyDC41OQvvhPrPGXgTtbEd1hWf1MiluBAqY",
    authDomain: "vrodrigues-2ef17.firebaseapp.com",  
    projectId: "vrodrigues-2ef17",  
    storageBucket: "vrodrigues-2ef17.appspot.com", 
    messagingSenderId: "615775668724",
    appId: "1:615775668724:web:1fbd203c4605414a3f91a1",
    measurementId: "G-ETBV5Y6T64"
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  
  const analytics = getAnalytics(app);

  function cadastroFireBase() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        console.log('funcionando')
        const user = userCredential.user;
        navigation.navigate('Login')  
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

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
          TextInput placeholder="Email"
           value={email} onChangeText={email=> setEmail(email)} 
        
        />
    </View>
    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#545455"
          placeholder="Senha"
           value={senha} onChangeText={senha => setSenha(senha)}
          secureTextEntry={true}
          
         
        />
        
    </View>
    <TouchableOpacity style={styles.signUpBtn} onPress={()=>{cadastroFireBase()}}>
        <Text style={styles.loginText} >Salvar</Text>
    </TouchableOpacity>
    
  </View>
  </LinearGradient>

  );
}
function Login() {
  const navigation = useNavigation();
 
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')


  const firebaseConfig = {
    apiKey: "AIzaSyDC41OQvvhPrPGXgTtbEd1hWf1MiluBAqY",
    authDomain: "vrodrigues-2ef17.firebaseapp.com",
    projectId: "vrodrigues-2ef17",
    storageBucket: "vrodrigues-2ef17.appspot.com",
    messagingSenderId: "615775668724",
    appId: "1:615775668724:web:1fbd203c4605414a3f91a1",
    measurementId: "G-ETBV5Y6T64"
  
  };
  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function loginFireBase() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate('Logged')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

 
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
          placeholder="E-mail" value={email} 
          onChangeText={email=> setEmail(email)}
        />
      </View>
      <Text style={styles.upInput}>Senha</Text>
      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Senha" value={senha} 
          onChangeText={senha=> setSenha(senha)}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
         
        />
    </View>
  
  
     <TouchableOpacity style={styles.loginBtn} onPress={()=>loginFireBase()}>
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
    backgroundColor:"white",
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
    backgroundColor: "white",
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
    backgroundColor: "white",
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
    backgroundColor: "white",
  },


});
