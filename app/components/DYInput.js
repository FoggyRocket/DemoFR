import React from "react";
import {Input, Item} from 'native-base'

const DYInput = ({ label,styles,pass,type,handleChange,name,value,valid }) => {
  
  return (
      <Item regular style={styles.inputContainerStyles}>
          <Input
            placeholderStyle={{ color: 'red' }}
            name={name}
            placeholder={label}
            keyboardType = {type}
            secureTextEntry={pass}
            style={styles.inputStyles}
            onChangeText={value=>handleChange(name,value)}
            maxLength={name ==='email' ? 20 :70 }
            value={value}
            onBlur={()=>valid(name,value)}
            />
      </Item>
  );
};

export default DYInput;
