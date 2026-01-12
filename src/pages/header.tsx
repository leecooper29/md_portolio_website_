import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header>
        <div className="logo">
          <h1>Lee Cooper.</h1>
        </div>
        <button
          className="menu-button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-drawer"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
        <div className="nav">
          <nav className="nav-list">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Portfolio</Link>
              </li>
              <li>
                <Link to="/collaboration">Collaboration</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div
        className={menuOpen ? "backdrop open" : "backdrop"}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
      <aside
        id="mobile-drawer"
        className={menuOpen ? "mobile-drawer open" : "mobile-drawer"}
      >
        <button
          className="close-button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>
        <nav className="drawer-nav">
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/collaboration" onClick={() => setMenuOpen(false)}>
                Collaboration
              </Link>
            </li>
            <li>
              <a href="">Linked In</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Header;
