import React from "react";
//class based component

class UserClass extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="user-card">
                <h1>Name : {this.props.name}</h1>
                <h3>Location : Delhi</h3>
                <h4>Contact: ishpreet@outlook.in</h4>
            </div>
        )
            
        
    }
}
export default UserClass;