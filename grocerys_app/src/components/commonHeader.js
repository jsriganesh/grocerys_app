import React,{memo} from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

// import { Container } from './styles';

const CommonHeadr = memo((props) =>{
    // alert("krishhhh")
 console.log(">>>>>>>>Common Header")
    return(
        <Appbar.Header>
        <Appbar.Content title="Home" />
        <Appbar.Action icon="magnify" />
        <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
    )
})

export default CommonHeadr