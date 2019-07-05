import React,{Component} from 'react'
import {StyleSheet,View} from 'react-native'
import {Container,Content,Text, Header, Thumbnail} from 'native-base'
import DYHeader from '../../components/DYHeader';


export default class Profile extends Component{
    static navigationOptions = {
        header: null
      };

      drawerOpen=()=>{
        this.props.navigation.openDrawer()
      }
     
    render(){
        let {navigation} =this.props
        return(
         

            <Container >
                <DYHeader onPress={this.drawerOpen}/>
                <Content>
                    <Text>Profile</Text>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Thumbnail large source={{uri: 'https://vignette.wikia.nocookie.net/yugiohenespanol/images/c/c8/Jaden_Yuki_original.jpg/revision/latest?cb=20160215221041&path-prefix=es'}}/>
                        <View>
                            <Text>Dylan Torres</Text>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
 
})