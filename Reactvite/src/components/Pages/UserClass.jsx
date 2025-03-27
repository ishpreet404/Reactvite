import React from "react";
//class based component

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        // this.state={  //state variable 
        //     count: 0,
            
        // }
        // console.log(this.props.name + "constructor called");
    }
    componentDidMount() {
        console.log(this.props.name + "component did mount is used to call api ");
        //because basic componets load hone ke baad api ki data aayega aur render ho jayega basically we will not have to wait for the data from api to render the webpage ui 
        
    }
    render() {
        console.log(this.props.name + "render called");
        const { name } = this.props;
        return (
            <div className="user-card">
                {/* <h1>Count :{this.state.count}</h1> */}
                {/* <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>increment count </button>
                <button onClick={() => {
                    this.setState({
                        count: 0,
                    })
                }}>RESET  count </button> */}
                <h1>Name : {name}</h1>
                <h3>Location : Delhi</h3>
                <h4>Contact: ishpreet@outlook.in</h4>
            </div>
        )
            
        
    }
}
export default UserClass;