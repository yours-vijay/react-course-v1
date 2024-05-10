import React from "react";

class UserClass extends React.Component{ 
    constructor(props){
        super(props);
        // console.log(props);
                this.state = {
            count: 0
        }
    }

    componentDidMount(){
        console.log('child componentDidMount');
    }


    render() { 
        console.log('Child render');
        const {name, location, address} = this.props;
        return ( 
            <div className="card card-body"> 
                <h4>{this.state.count}</h4>
                <button type="button" style={{width:'fit-content'}}
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}
                >Increase</button> <h5>Name: {name}</h5> 
                <p>Location: {location}</p> 
                <p>Address: {address}</p> 
            </div> 
            ) 
        } 
    }

export default UserClass;