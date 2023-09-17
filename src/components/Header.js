import { LOGO_URL } from "../utils/constants";
const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} >
                </img>
                </div>
          <div className="Anna">Annapurna</div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>

            </div>
            </div>
    )
}

export default Header;


