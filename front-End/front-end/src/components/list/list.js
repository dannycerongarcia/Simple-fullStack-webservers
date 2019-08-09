import React, { Component } from 'react';
import axios from 'axios';
import myJsonData from '../someJson.json'
import './list.css';

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
            <p key={car.name}>
                {car.name}
            </p>
        )
        return <div>{listItems}</div>;
    }

    render() {
        // this.load();
        this.load_json_file();

        return (
            <div class="back-ground2">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/list">List</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown link
        </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="container-fluid">

                    <div class="row">
                        <h1>The list pages</h1>
                    </div>
                    <div class="row">
                        <div class="col">
                            {this.state.jsonData}
                        </div>
                        <div class="col">
                            {this.state.data2}
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
                {/* end of container */}
            </div>
            // {/* end of background div */}
        );
    }
}
export default List;