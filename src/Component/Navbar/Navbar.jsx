import Container from "../Container";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const onButtonClick = () => {

  fetch('resume.pdf').then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'resume.pdf';
          alink.click();
      })
  })
}



  const item = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#ff6900" : "#15295f",
              background: isPending ? "" : "none",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <Link to="#services" smooth className="font-bold text-[#15295f]">
        Services
        </Link>
      </li>
      <li>
        <Link to="#projects" smooth className="font-bold text-[#15295f]">
        Projects
        </Link>
      </li>
      <li>
        <Link to="#about" smooth className="font-bold text-[#15295f]">
        About
        </Link>
      </li>
      <li>
        <Link to="#contact" smooth className="font-bold text-[#15295f]">
        Contact
        </Link>
      </li>
      
    </>
  );

  return (
    <div className=" border-b-2 border-neutral-100 bg-[#fdf8f7] ">
      <Container>
        <div className="navbar   w-full sticky">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {item}
              </ul>
            </div>
            <a className="normal-case text-xl  text-[#15295f] font-extrabold">
              Jobayar <span className=" text-4xl text-[#ff6900]">.</span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{item}</ul>
          </div>
          <div className="navbar-end ">
            <button onClick={onButtonClick} className="font-bold hover:text-[#ff6900]"> Download Resume</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
