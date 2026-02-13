// import React, { useState, useEffect, useRef } from "react";
// import "./Header.css";

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navRef = useRef(null);

//   const handleClickOutside = (event) => {
//     if (navRef.current && !navRef.current.contains(event.target)) {
//       setMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleNavigation = (event, targetId) => {
//     event.preventDefault();
//     document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   return (
//     <header>
//       <nav ref={navRef}>
//         <div class="logo">
//        HAR<span>INI</span>
//         </div>
//         <div className="menu-icon" onClick={toggleMenu}>
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </div>
//         <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//           <li>
//             <a href="#about" onClick={(e) => handleNavigation(e, "about")}>
//               <span>👨🏻‍🎓</span>
//               <span>About Me</span>
//             </a>
//           </li>
//           <li>
//             <a href="#skills" onClick={(e) => handleNavigation(e, "skills")}>
//               <span>👨🏻‍💻</span>
//               <span>Skills</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#projects"
//               onClick={(e) => handleNavigation(e, "projects")}
//             >
//               <span>📋</span>
//               <span>Projects</span>
//             </a>
//           </li>
//           <li>
//             <a href="#contact" onClick={(e) => handleNavigation(e, "contact")}>
//               <span>📞</span>
//               <span>Contact Me</span>
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
import React, { useState, useEffect, useRef } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id "${targetId}" not found.`);
    }
    
    setMenuOpen(false);
  };

  return (
    <header>
      <nav ref={navRef}>
        <div className="logo">
          HAR<span>INI</span>
        </div>
        <div
          className="menu-icon"
          onClick={toggleMenu}
          role="button"
          aria-label="Menu"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#about" onClick={(e) => handleNavigation(e, "about")}>
              <span>👨🏻‍🎓</span>
              <span>About Me</span>
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleNavigation(e, "skills")}>
              <span>👨🏻‍💻</span>
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => handleNavigation(e, "experience")}
            >
              <span>📋</span>
              <span>Experience</span>
            </a>
          </li>
          <li>
            <a
              href="#tedx-experience"
              onClick={(e) => handleNavigation(e, "tedx-experience")}
            >
              <span>🎤</span>
              <span>TEDx_Experience</span>
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavigation(e, "contact")}>
              <span>📞</span>
              <span>Contact Me</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
