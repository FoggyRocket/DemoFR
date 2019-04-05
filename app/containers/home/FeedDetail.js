import React,{Component} from 'react'
import {StyleSheet} from 'react-native'
import {Container,Content,Text, Header} from 'native-base'


export default class Home extends Component{
    static navigationOptions = {
        header: null
      };

    render(){
        let {navigation} =this.props
        let {handeleChange}=this
        return(
         

            <Container >
                <Header title={'Home'}/>
                <Content>
                    <Text>detail</Text>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
 
})