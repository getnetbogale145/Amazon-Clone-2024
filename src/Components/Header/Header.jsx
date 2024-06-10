import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";
import { Type } from "../../Utility/action.type"; // Ensure you have this import

const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      })
      .catch((error) => {
        console.error("Sign Out Error:", error);
      });
  };

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          {/* logo section */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>

            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={38} />
          </div>

          {/* other section */}
          <div>
            <div className={classes.order__container}>
              <Link to="" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                  alt="USA Flag"
                />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </Link>
              <Link to={!user && "/auth"}>
                <div>
                  {user ? (
                    <>
                      <p> Hello {user?.email.split("@")[0]} </p>
                      <span onClick={handleSignOut}> Sign Out</span>
                    </>
                  ) : (
                    <>
                      <p>Sign In</p>
                      <span> Accounts & Lists</span>
                    </>
                  )}
                </div>
              </Link>

              <Link to="/orders">
                <p>returns</p>
                <span>& Orders</span>
              </Link>

              <Link to="/cart" className={classes.cart}>
                <BiCart size={35} />
                <span>{totalItem}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LowerHeader />
    </section>
  );
};

export default Header;
