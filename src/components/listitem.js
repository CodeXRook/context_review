import React from 'react';
import ThemeContext from '../contexts/theme';

//HOC : Higher Order Components


export default (props) => {
    return(
        <LanguageContext.Consumer>
            {
                (language) => {
                    return <ThemeContext.Comsumer>
                        {
                            (theme) => {
                                return <li style={{ backgroundColor: value.backgroundColor, color: value.color }}>{props.data}</li>
                            }
                        }
                    </ThemeContext.Comsumer>
                }
            }
        </LanguageContext.Consumer>

    );
}


