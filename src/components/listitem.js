import React from 'react';
import ThemeContext from '../contexts/theme';


export default (props) => {
    return(

    <ThemeContext.Consumer>
        {
            (value) => {
            return <li style={{ backgroundColor: value.backgroundColor, color: value.color }}>{props.data}</li>   
            }
        }
    </ThemeContext.Consumer>
    );
}


