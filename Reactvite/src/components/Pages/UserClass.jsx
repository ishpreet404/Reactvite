import React from "react";
//class based component

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state={  //state variable 
            // count: 0,
            userinfo: "x",
        }
        // console.log(this.props.name + "constructor called");
    }
    async componentDidMount() {
        // console.log(this.props.name + "component did mount is used to call api ");
        //because basic componets load hone ke baad api ki data aayega aur render ho jayega basically we will not have to wait for the data from api to render the webpage ui 
        const data = await fetch("https://api.github.com/users/ishpreet404");
        const json = await data.json();
        this.setState({
            userinfo:json,
            
        })
        console.log(json);
        
        
    }
    render() {
        console.log(this.props.name + "render called");
        // const { name } = this.props;
        return (
            <div className="user-card">
                {/* <h1>Count :{this.state.count}</h1>
                { { <button onClick={() => { }
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>increment count </button>
                <button onClick={() => {
                    this.setState({
                        count: 0,
                    })
                }}>RESET  count </button> }
                <h1>Name : {name}</h1> */}
                <h1>Github UserName : {this.state.userinfo.login}</h1>
                 <img className="avatar" src={this.state.userinfo.avatar_url} alt="avatar" /> 
                <h4>Contact: ishpreet@outlook.in</h4>
            </div>
        )
            
        
    }
}
export default UserClass;