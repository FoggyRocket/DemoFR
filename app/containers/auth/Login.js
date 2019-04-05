import React,{Component} from 'react'
import {View,ImageBackground,StyleSheet,TouchableOpacity,Image} from 'react-native'
import {Container,Content,Text} from 'native-base'
import IMG from '../../assests/images';
import DYInput from '../../components/DYInput';
import DYButton from '../../components/DTButton';


export default class Login extends Component{
    static navigationOptions = {
        header: null
      };
    state={
        data:{
            email:'',
            password:'' 
        },

    }


    handeleChange=(value,field)=>{
        let {data}=this.state
        data[field]=value
        this.setState({data})
    }
    render(){
        let {navigation} =this.props
        let {handeleChange}=this
        return(
         

            <ImageBackground source={IMG.Background} style={{flex:1,justifyContent:'center'}} >

                    <Image/>
                    <View style={{justifyContent:'center',alignItems:'center',paddingTop:50,padding:20}}>
                        <DYInput 
                            name='email'
                            label='Ingresa tu Corre dylan@mail.com'
                            pass={false}
                            type='default'
                            handleChange={handeleChange}
                            styles={styles}
                        />
                        <DYInput 
                            name='password'
                            label='Ingresa tu contraseña'
                            pass={true}
                            type='default'
                            handleChange={handeleChange}
                            styles={styles}
                        />
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <DYButton
                                onPress={()=>navigation.navigate('Home')}
                                label='Iniciar'
                                styles={styles.btn}
                                disable={false}
                            />
                        </View>
                        <View style={styles.containerText}>
                            <Text style={styles.textSignup}>¿Aun no tienes cuenta?</Text>
                            <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                                <Text style={styles.textSignupButton}>¡Registrate aqui!</Text>
                            </TouchableOpacity>
                        </View>
                    </View> 

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#83adfc',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        width:200
    },
    inputContainerStyles:{
        backgroundColor:'#ececec',
        borderRadius:5,
        marginBottom:20,
        height:40
    },
    inputStyles:{
        fontSize:15
    },
    containerText:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    textSignup:{
        fontSize:13,
    },
    textSignupButton:{
        fontWeight:'bold',
        fontSize:14,
    }
})