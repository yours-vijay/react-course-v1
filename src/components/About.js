import React from "react";
import User from "./User";
import UserClass from './UserClass'

class About extends React.Component{

    render(){
        console.log('Parent Render');
        return <div>
        <h2>About Page is Loaded</h2>
        <UserClass 
            name={'vijay reddy'}
            location={'Hyderabad'}
            address={'vijay@gmail.com'}
        />
    </div>
    }
}

export default About;