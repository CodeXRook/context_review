import React from 'react';
import ThemeContext from '../contexts/theme';

//HOC : Higher Order Components

// const returnSomeOther = () ={
//     return <ThemeContext.Consumer>
//     {
//         (theme) => {
//             return <li style={{ backgroundColor: value.backgroundColor, color: value.color }}>{props.data}</li>
//     }
// }
// </ThemeContext.Consumer>

// }

export default (props) => {
    return(
        <ThemeContext.Consumer>
            {
               (theme) => {
                   return <li style= {{ backgrouhndColor: theme.backgroundColor, color: theme.color }}>{props.data}</li>
            }
                 
            }
        </ThemeContext.Consumer>
    );
}


