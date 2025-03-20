import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
const Header = () => {
    const [btnname ,setbtnname] = useState("Login");
    useEffect(()=>{
        
    },[])
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
                setbtnname("Logout")
            }}>{btnname}</button>
            </ul> 
        </div>
    </div>
)}; 
export default Header;