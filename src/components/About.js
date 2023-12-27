import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent Constructor");
    }

    componentDidMount(){
        // console.log("Parent component did mount");
      }
    render(){
        // console.log("Parent Render");
        return(
            <div>
            <h1>About</h1>
            <div>
                loggedIn User
                <UserContext.Consumer>
                    {({loggedInUser})=><h1 className="text-xl">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <h2>This is about page</h2>
            {/* <User name={"Asfa Sarah (function)"} location={"Pune  Function"}/> */}
            <UserClass name={"Asfa S (Class)"} location={"Pune Class"}/>
            {/* <UserClass name={"Ronaldo (Class)"} location={"Spain Class"}/> */}

        </div>

        );
    }
}


export default About;