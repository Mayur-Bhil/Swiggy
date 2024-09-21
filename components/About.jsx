import User from "./User"; 
import UserClass from "./UserClass";
import {Component} from "react";
    
    class About extends Component{

        constructor(props){
            super(props);

            // console.log(" parent Cunstructor");
        }
        componentDidMount(){
                // console.log("parent Did Mount");           
        }
        render(){
            // console.log("parent render");
            return (
                <div className="about">
                    <h1>About page !</h1>
                   
                    <UserClass name = {"nirmal Bhai From ClassBased Component"} location = {" Location From Functional Comp"} contact = {"@mayur_Works"}/>
                </div>
             )
        }
    }


export default About;