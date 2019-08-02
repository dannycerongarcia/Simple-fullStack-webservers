import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            data2: []
        }
    }

    load() {
        axios.get('/Ilist')
            .then((res) => {
                this.setState({ data: res.data });
                this.setState({ data2: this.store(this.state.data) });
                console.log(this.state.data2);

            })
            .catch(error => {
                console.log(error);
            });

    }

    store(props) {
        const listItems = props.list.map(car =>
            <li key={car.name}>
                {car.name}
            </li>
        )
        return <div>{listItems}</div>;
    }

    render() {
        this.load();



        return (
            <div>
                {this.state.data2}
            </div>
        );
    }
}
export default List;