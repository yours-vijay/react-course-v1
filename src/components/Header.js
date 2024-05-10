import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

import { useSelector } from "react-redux";


const Header = () => {
  const [loginText, setLoginText] = useState("LogIn");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  useEffect(() => {}, [loginText]);

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <a className="navbar-brand text-white" href="#">
          BrandName
        </a>
        <ul className="navbar-nav flex-row gap-3">
        <li className="nav-item">
          {onlineStatus === true ? '🟢' : '🔴'}
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-white" to="/cart">
          Cart [{cartItems.length} items]
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="btn btn-primary"
              onClick={() => {
                // setLoginText('LogOut');
                loginText === "LogIn"
                  ? setLoginText("LogOut")
                  : setLoginText("LogIn");
              }}
            >
              {loginText}
            </a>
          </li>
          <li className="nav-item text-white">{loggedInUser}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
