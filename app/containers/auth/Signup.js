import React,{Component} from 'react'
import {View,ImageBackground,StyleSheet,TouchableOpacity} from 'react-native'
import {Container,Content,Text} from 'native-base'
import IMG from '../../assests/images';
import DYInput from '../../components/DYInput';
import DYButton from '../../components/DTButton';


export default class Signup extends Component{

    state={
        data:{
            email:'',
            password:'',
            name:'',
            confirm_password:'' 
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
                    <View  style={{justifyContent:'center',alignItems:'center',paddingTop:50,padding:20}}>
                        <DYInput 
                            name='name'
                            label='Nombre'
                            pass={false}
                            type='default'
                            handleChange={handeleChange}
                            styles={styles}
                        />
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
                            label='Ingresa una contraseña'
                            pass={true}
                            type='default'
                            handleChange={handeleChange}
                            styles={styles}
                        />
                        <DYInput 
                            name='confirm_password'
                            label='Confirma tu contraseña'
                            pass={true}
                            type='default'
                            handleChange={handeleChange}
                            styles={styles}
                        />
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                        <DYButton
                            label='Registrate'
                            styles={styles.btn}
                        />
                        </View>
                        <View style={styles.containerText}>
                            <Text style={styles.textSignup}>¿Ya Tienes cuenta?</Text>
                            <TouchableOpacity onPress={()=>navigation.pop()}>
                                <Text style={styles.textButton}>¡Iniciar sesion!</Text>
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
    containerText:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    container:{backgroundColor:'blue'},
    inputContainerStyles:{
        backgroundColor:'#ececec',
        borderRadius:5,
        marginBottom:20,
        height:40
    },
    textButton:{
        fontWeight:'bold',
        fontSize:14,
    },
    inputStyles:{
        fontSize:15
    }
})