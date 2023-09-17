import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header=()=>{

    const [loginbtn, setloginbtn]= useState("Login")

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} >
                </img>
                </div>
          <div className="Anna">Annapurna</div>
            <div className="nav-items">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                    <button className="login" 
                  onClick={()=>{
                    loginbtn==="Login"?
                    setloginbtn("Logout"):setloginbtn("Login")
                  }}
                  >{loginbtn}</button>
                </ul>

            </div>
            </div>
    )
}

export default Header;


