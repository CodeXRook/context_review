import React from 'react';
import ListItem from '../components/listitem';

export default class List extends React.Component {

    state ={
        date: [1, 2, 3, 4, 5]
    }

    render() {
        return(
            this.state.date.map((e, i ) => {

            })
        )
    }
}