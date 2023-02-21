import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <>
      <header className="primary-header flex">
        <div>
          <img
            src="../assets/shared/logo.svg"
            alt="space tourism logo"
            className="logo"
          />
        </div>
        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
        >
          <span className="sr-only" aria-expanded="false">
            Menu
          </span>
        </button>
        <nav>
          <ul
            id="primary-navigation"
            data-visible="false"
            className="primary-navigation underline-indicators flex"
          >
            <li className="active">
              <Link
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                to="/"
              >
                <span aria-hidden="true">00</span>Home
              </Link>
            </li>
            <li>
              <Link
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                to="/destination"
              >
                <span aria-hidden="true">01</span>Destination
              </Link>
            </li>
            <li>
              <Link
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                to="/crew"
              >
                <span aria-hidden="true">02</span>Crew
              </Link>
            </li>
            <li>
              <Link
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                to="/technology"
              >
                <span aria-hidden="true">03</span>Technology
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainNavigation;
