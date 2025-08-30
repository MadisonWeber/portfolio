import { Home } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";
import Hamburger from "./Hamburger";

const NavBar = () => {
  const [useHamburger, setUseHamburger] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleResize = () => {
    const size = window.innerWidth;

    if (size > 800) {
      setUseHamburger(false);
    } else {
      setUseHamburger(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    const checkForClickAway = (e) => {
      const { target } = e;

      if (!target.classList.contains("link-container-hamburger-closed")) {
        let element = document.querySelector(
          ".link-container-hamburger-closed",
        );
        element.classList.remove("open");
        setHamburgerOpen(false);
      } else {
        return;
      }
    };

    if (hamburgerOpen) {
      window.addEventListener("click", checkForClickAway);
    }

    return () => window.removeEventListener("click", checkForClickAway);
  }, [hamburgerOpen]);

  const handleClick = () => {
    let element = document.querySelector(".link-container-hamburger-closed");
    if (element.classList.contains("open")) {
      element.classList.remove("open");
      setHamburgerOpen(false);
    } else {
      element.classList.add("open");
      setHamburgerOpen(true);
    }
  };

  return (
    <nav
      className="nav-container"
      style={{
        height: 80,
        background: "white",
        borderBottom: "1px solid #eeeeee",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <NavLink
          to="/"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
            }}
          >
            <Home color="black" height={18} />
            <span
              style={{
                margin: 0,
                padding: 0,
                transform: "translateY(2px)",
                fontSize: 15,
                color: "black",
              }}
            >
              Madison Weber
            </span>
          </div>
        </NavLink>

        <div className="link-container" style={{ marginLeft: "auto" }}>
          {useHamburger ? (
            <Hamburger
              handleClick={handleClick}
              hamburgerOpen={hamburgerOpen}
            />
          ) : (
            <div>
              <NavLink to="/about" activeClassName="currentPage">
                {" "}
                About
              </NavLink>
              <NavLink to="/portfolio" activeClassName="currentPage">
                {" "}
                Portfolio
              </NavLink>
              <NavLink to="/skills" activeClassName="currentPage">
                {" "}
                Skills
              </NavLink>
              <NavLink to="/contact" activeClassName="currentPage">
                {" "}
                Contact
              </NavLink>{" "}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
