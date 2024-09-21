import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{

    constructor(props){
            super(props)
            
            
            
            this.state = {
                    userInfo :{
                        name : "Dummy Name",
                        location : "Brahmahand",
                        avatar_url: "https.in",
                        bio : "Weber",
                    }
            };
        }

      async  componentDidMount(){
           const data = await fetch(" https://api.github.com/users/Mayur-Bhil")
           const json = await data.json();


           this.setState({
                userInfo : json,
           })
           console.log(json);
        }
        componentDidUpdate(){
            console.log("componenet update called");
        }
        componentWillUnmount(){
            console.log("Wll COmponent Called");
        }
        
    render(){
        const {name,location,avatar_url,bio} = this.state.userInfo;
       
        return(
        <div className="User-card"> 
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <p>{bio}</p>
            <img src = {avatar_url}/>
            <UserContext.Consumer>
                    {({logedInUser})=><h1>{logedInUser}</h1>}
            </UserContext.Consumer>
        </div>
        )
    }

}

export default UserClass;