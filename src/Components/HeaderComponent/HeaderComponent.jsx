import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const HeaderComponents = () => {
  return (
    <div>
      <nav className={classes.heady}>
        <ul className={classes.navbar}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <button className={classes.search}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </nav>

      <hr />
    </div>
  );
};


export default HeaderComponents;
