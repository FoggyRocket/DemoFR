import React from "react";
import {ListItem, Left, Icon, Body, Text, Right} from 'native-base'

const DTElementList = ({ label,icon,onPress }) => {
  
  return (
    <ListItem icon onPress={onPress}>
        <Left>
            <Icon name={icon} style={{color:'white'}}/>
        </Left>
        <Body>
            <Text style={{color:'white'}}>{label}</Text>
        </Body>
        <Right/>
    </ListItem>
  );
};

export default DTElementList;