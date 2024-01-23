import { NavLink } from "react-router-dom";
function Navbar() {
    return(
        <ul>
        <NavLink className="link" to={"/"}>
          Github
        </NavLink>
        <NavLink className="link" to={"/front"}>
          Frontend Mentor
        </NavLink>
        <NavLink className="link" to={"/linkedln"}>
          Linkedln
        </NavLink>
        <NavLink className="link" to={"/twitter"}>
          Twitter
        </NavLink>
        <NavLink className="link" to={"/instagram"}>
          Instagram
        </NavLink>
    </ul>
    )
}

export default Navbar;
