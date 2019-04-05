import React, { Component } from 'react';
import { Image } from 'react-native';
import {  Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
const DYCard=()=>{
    return(
        <Card>
            <CardItem cardBody>
            <Image source={{uri: 'https://image.freepik.com/free-photo/heart-made-red-roses_24972-287.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
            
            <Body>

                <Text>Lorem impsu dolor </Text>
            </Body>
            
            </CardItem>
            <CardItem>
            <Left>
                <Thumbnail small source={{uri: 'https://vignette.wikia.nocookie.net/yugiohenespanol/images/c/c8/Jaden_Yuki_original.jpg/revision/latest?cb=20160215221041&path-prefix=es'}} />
                <Body>
                <Text>NativeBase</Text>
            </Body>
            </Left>

            <Right>
                <Text note>5 minutos ago</Text>
            </Right>
            </CardItem>
        </Card>
    )

}
export default DYCard