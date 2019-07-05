import React,{Component} from 'react'
import {StyleSheet} from 'react-native'
import {Container,Content,Text, Header, Left, Title, Right, Button, Icon} from 'native-base'
import DYCard from '../../components/DYCard';
import DYCreatePost from '../../components/DYCreatePost';
import DYHeader from '../../components/DYHeader';


export default class Home extends Component{
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
                <DYCreatePost/>
                <Content style={{padding:20}}>
                    {[0,1,2,3,4,5].map((data,i)=>
                        <DYCard key={i}/>
                    )}
                    
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
 
})