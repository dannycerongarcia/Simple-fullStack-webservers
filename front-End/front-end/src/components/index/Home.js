import React from 'react';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            temp:[]
        }
    }

    render(){
        return(
            <div>
                This is the HomePage
            </div>
        );
    }
}

export default HomePage;