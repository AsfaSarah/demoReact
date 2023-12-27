import React from "react";

class UserClass extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userInfo:{
        name:"Dummy",
        location:"Default"

      }
    };

    // console.log( this.props.name+" Child Constructor");
  }

  async componentDidMount(){
    // console.log(this.props.name+ " Child component did mount");

    const data= await fetch("https://api.github.com/users/asfasarah");
    const json= await data.json();
    console.log(json);
    this.setState({
      userInfo:json
    });
  }

  componentDidUpdate(){
    console.log("Component did update");
  }
  componentWillUnmount(){
    console.log("component will unmount");
  }
    render() {
      // console.log( this.props.name+" Child Render");
      return (
        <div className="user-card">
        {/* <h1>count= {this.state.count}</h1> */}
        {/* <button onClick={()=>{
          this.setState({
            count:this.state.count+1
          })
        }}>Count Increase</button> */}
           <h2>Name: {this.state.userInfo.name}</h2>
            <h3>Location: {this.state.userInfo.location}</h3>
             <h4>Contact: @asfa.sarah</h4>
      
        </div>
      )
    }
}

export default UserClass;