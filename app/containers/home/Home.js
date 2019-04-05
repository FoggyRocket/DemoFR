import React,{Component} from 'react'
import {StyleSheet} from 'react-native'
import {Container,Content,Text, Header} from 'native-base'
import DYCard from '../../components/DYCard';
import DYCreatePost from '../../components/DYCreatePost';


export default class Home extends Component{
    static navigationOptions = {
        header: null
      };

    render(){
        let {navigation} =this.props
        return(
            <Container >
                <Header title={'Home'}/>
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