import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
const Header = () => {
    const [btnname ,setbtnname] = useState("Login");
    // console.log("header");
    //on empty dependency array useEffect is called once on the initial render 
    //if dependecy array is btnname it will be called every time btnname is changed 
    useEffect(()=>{ //everytime page renders useffect is called if no dependancy array 
        // console.log("usecalles");
        
    })
    return (
    <div className="Header">
        <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="navbar-items">  
           <ul>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Cart</li>
            <button className="logbtn" onClick={()=>{
               btnname ==="Login" 
               ? setbtnname("Logout")
               : setbtnname("Login")
            }}>{btnname}</button>
            </ul> 
        </div>
    </div>
)}; 
export default Header;