import { useState } from "react";
import { NavLink } from "react-router-dom";

function MainNavigation() {
  const [isVisible, setIsVisible] = useState(false);

  const mobileNavToggleHandler = () => {
    setIsVisible((prevState) => !prevState);
  };

  const navHandler = () => {
    setIsVisible(false);
  };

  return (
    <header className="primary-header flex">
      <div>
        <img
          src={"/assets/shared/logo.svg"}
          alt="space tourism logo"
          className="logo"
        />
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={isVisible ? "true" : "false"}
        onClick={mobileNavToggleHandler}
      >
        <span className="sr-only" aria-expanded="false">
          Menu
        </span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          data-visible={isVisible ? "true" : "false"}
          className="primary-navigation underline-indicators flex"
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "ff-sans-cond uppercase text-white letter-spacing-2 active"
                  : "ff-sans-cond uppercase text-white letter-spacing-2"
              }
              to="/"
              onClick={navHandler}
            >
              <span aria-hidden="true">00</span>Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "ff-sans-cond uppercase text-white letter-spacing-2 active"
                  : "ff-sans-cond uppercase text-white letter-spacing-2"
              }
              to="/destination"
              onClick={navHandler}
            >
              <span aria-hidden="true">01</span>Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "ff-sans-cond uppercase text-white letter-spacing-2 active"
                  : "ff-sans-cond uppercase text-white letter-spacing-2"
              }
              to="/crew"
              onClick={navHandler}
            >
              <span aria-hidden="true">02</span>Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "ff-sans-cond uppercase text-white letter-spacing-2 active"
                  : "ff-sans-cond uppercase text-white letter-spacing-2"
              }
              to="/technology"
              onClick={navHandler}
            >
              <span aria-hidden="true">03</span>Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
