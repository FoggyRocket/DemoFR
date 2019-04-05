import React, { Component } from 'react';
import {StyleSheet,View,Alert,AsyncStorage} from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Body,Title,Left,Thumbnail,Right,Button,Icon } from 'native-base';
import DTElementList from '../../components/DTElementList';

export default class Sidebar extends Component {


    render() {

        let{navigation}=this.props

        return (
            <Container style={{backgroundColor:"rgba(0,0,0,0.8)",flex:1}}>

                    <Header transparent style={{marginBottom:20}}>
                        <Left>
                            
                            {/* <Thumbnail source={logo}/> */}
                        </Left>
                        <Body style={{flex:1}}>
                            <Text style={styles.title}>Mi App Demo</Text>
                        </Body>
                        <Right/>
                    </Header>
                <Content>
                    <DTElementList
                        label='Home'
                        icon='home'
                        onPress={()=>navigation.navigate('Home')}
                    />
                    <DTElementList
                        label='Perfil'
                        icon='contact'
                        onPress={()=>navigation.navigate('Profile')}
                    />

                                
                </Content>
                <View style={styles.boton}>
                        <Button full bordered light>
                            <Text>CERRAR SESIÓN</Text>
                        </Button>

                    <Text style={{fontSize:12, color:'white',marginTop:20 }}>Términos y condiciones</Text>
                </View>

            </Container>
        );
    }
}

const styles = StyleSheet.create({

    title:{
        width:'100%',
        color:'white',
        marginBottom:20,
    },
    texito:{
        color:'white'
    },
    boton:{
        padding:20,
        justifyContent:'center',
        alignItems:'center'
    }
})