import { useRouteError } from "react-router-dom"
  
export const Error = ()=>{
    const err = useRouteError();
    // console.log(err); 
    return(
        <div className="error">
            <h1>Somthing Went Wrong</h1>
            <img src="https://www.iwmbuzz.com/wp-content/uploads/2021/03/funny-pics-top-5-memes-of-akshay-kumar-that-we-bet-you-cant-stop-going-rofl.jpeg" alt="" />
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
}
