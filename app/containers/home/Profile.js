import React,{Component} from 'react'
import {StyleSheet,View,TouchableOpacity} from 'react-native'
import {Container,Content,Text, Header, Thumbnail} from 'native-base'
import DYHeader from '../../components/DYHeader';
import ImagePicker from 'react-native-image-picker';

export default class Profile extends Component{
    static navigationOptions = {
        header: null
      };

      state={
          avatarSource:{uri:'https://vignette.wikia.nocookie.net/yugiohenespanol/images/c/c8/Jaden_Yuki_original.jpg/revision/latest?cb=20160215221041&path-prefix=es'}
      }
      drawerOpen=()=>{
        this.props.navigation.openDrawer()
      }
     onPress=()=>{
        ImagePicker.showImagePicker((response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source,
              });
            }
          });
          
     }
    render(){
        let {navigation} =this.props
        let {onPress}=this
        let {avatarSource}=this.state
        return(
         

            <Container >
                <DYHeader onPress={this.drawerOpen}/>
                <Content>
                    <Text>Profile</Text>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity onPress={onPress}>
                            <Thumbnail large source={avatarSource}/>
                        </TouchableOpacity>
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