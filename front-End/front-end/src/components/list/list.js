import React, { Component } from 'react';
import axios from 'axios';
import myJsonData from '../someJson.json'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            data2: [],
            jsonData: []
        }
        // this.load_json_file = this.load_json_file.bind(this)
    }

    load_json_file = () => {
        this.state.jsonData = myJsonData.list.map(list => {
            return (
                <h3 key={list.id}>
                    {list.name}
                </h3>
            )
        })
        // this.setState({ jsonData: "CAR1" });
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
        // this.load();
        // this.load_json_file();

        return (
            
            <div>

                <h1>The list pages</h1>
                {this.state.data2}
                {this.state.jsonData}
            </div>

        );
    }
}
export default List;