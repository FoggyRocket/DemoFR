
import React, { Component } from 'react';
import { Image } from 'react-native';
import {  Header,Button, Icon,Title, Left, Right } from 'native-base';
const DYHeader=({onPress})=>(

    <Header>
        <Left>
            <Button transparent onPress={onPress}>
                <Icon name='menu'/>
            </Button>
        </Left>
        <Title/>
        <Right/>
    </Header>


)
export default DYHeader