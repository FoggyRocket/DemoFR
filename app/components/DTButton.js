import React from "react";
import {Button,Text} from 'native-base'

const DYButton = ({ label,onPress,styles,pressed,onHoverOut,disable }) => {
  return (
      <Button 
        block
        bordered
        style={styles}
        onPress={onPress}
        disabled={disable}
        >
        <Text style={{color:'#fff',alignSelf:'center'}}>
          {label}
        </Text>
      </Button>
    
  );
};

export default DYButton;
