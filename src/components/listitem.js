import React from 'react';
import ThemeContext from '../contexts/theme';

//HOC : Higher Order Components


export default (props) => {
    return(
        <LanguageContext.Consumer>
            {
                (language) => {
                    return
                }
            }
        </LanguageContext.Consumer>

    );
}


