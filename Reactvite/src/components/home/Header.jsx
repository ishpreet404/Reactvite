import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Header = () => {
  const [btnname, setbtnname] = useState("Login");
  // console.log("header");
  //on empty dependency array useEffect is called once on the initial render
  //if dependecy array is btnname it will be called every time btnname is changed
  
  useEffect(() => {
    //everytime page renders useffect is called if no dependancy array
    // console.log("usecalles");
  });
  const ison = useOnlineStatus(); 
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navbar-items">
        <ul>
          <li>Online Status : { ison? "🟢" : "🔴" }</li>
          <li><Link to="/">Home</Link></li> 
          {/* Link does not refreshes the whole page and imporves performace as compared to anchor tag here header will not be rerndered or refreshed only outlet gets refreshes  */}
          {/* thats why react websites are knows as Single page application  */}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li>Cart</li>
          <button
            className="logbtn"
            onClick={() => {
              btnname === "Login" ? setbtnname("Logout") : setbtnname("Login");
            }}
          >
            {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
