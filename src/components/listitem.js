import React from 'react';
import ThemeContext from '../contexts/theme';


export default (props) => {
    return <li style={{backgroundColor: props.theme.backgroundColor, color: props.theme.color }}>{props.data}</li>
}


