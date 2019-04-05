import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs ,Text,Item,Input,Button,Icon,List,ListItem,Left,Body,Right,Thumbnail} from 'native-base';
import {StatusBar,StyleSheet,View} from 'react-native'
// import NewPost from "../news/NewPost";

export default  class DYCreatePost extends  Component{
    state={
        newPost:false
    }


    openNewPost=()=>{
        let {newPost}=this.state;
        newPost =! newPost
        this.setState({newPost})
    }
    render(){
        return(
            <View>
                <View style={styles.caja}>
                    <List >
                        <ListItem avatar onPress={this.openNewPost}>
                            <Left>
                                <Thumbnail small source={{ uri: 'https://www.mobafire.com/images/avatars/kayn-classic.png' }} />
                            </Left>
                            <Body>
                            <Text note>¿Qué nos quieres compartir?</Text>
                            </Body>
                            <Right/>
                        </ListItem>
                    </List>
                </View>
                {/* <NewPost open={this.state.newPost} close={this.openNewPost}/> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({

    caja:{
        padding:10,

        borderRadius: 4,
        borderBottomWidth: 4,
        borderColor: '#d6d7da',
    }

})