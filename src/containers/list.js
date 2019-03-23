import React from 'react';
import ListItem from '../components/listitem';
import ThemeContext from '../contexts/theme';


export default class List extends React.Component {

    static contextType = ThemeContext;

    state = {
        date: [1, 2, 3, 4, 5, 6, 7]
    }

    render() {
        console.log(this.context);
        return (
            <ul>
                {
                    this.state.date.map((e, i) => {
                        return <ListItem data={e} theme={this.props.theme} key={i} />
                    })
                }
            </ul>
        )
    }
}