import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the active link state
  };
  return (
    <>
    <div className="hero_area">

    <div className="hero_bg_box">
      <div className="bg_img_box">
        <img src="images/hero-bg.png" alt=""/>
      </div>
    </div>
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <span>
              Finexo
            </span>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li className={activeLink === 'home' ? 'active nav-item' : 'nav-item'}>
                <Link className='nav-link' to="/" onClick={() => handleLinkClick('home')}>Home</Link>
              </li>
              <li className={activeLink === 'about' ? 'active nav-item' : 'nav-item'}>
                <Link className='nav-link' to="/about" onClick={() => handleLinkClick('about')}> About </Link>
              </li>
              <li className={activeLink === 'service' ? 'active nav-item' : 'nav-item'}>
                <Link className='nav-link' to="/service" onClick={() => handleLinkClick('service')}>Services </Link>
              </li>
              <li className={activeLink === 'why' ? 'active nav-item' : 'nav-item'}>
                <Link className='nav-link' to="/why" onClick={() => handleLinkClick('why')}>Why Us</Link>
              </li>
              <li className={activeLink === 'team' ? 'active nav-item' : 'nav-item'}>
                <Link className='nav-link' to="/team" onClick={() => handleLinkClick('team')}>Team</Link>
              </li>
              <li className='nav-item'>
                <Link className="nav-link" to="/"> <i className="fa fa-user" aria-hidden="true"></i> Login</Link>
              </li>
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </div>
    {/* <nav className="navbar">
      <ul className="navbar-nav">
        <li className={activeLink === 'home' ? 'active nav-item' : 'nav-item'}>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className={activeLink === 'home' ? 'active nav-item' : 'nav-item'}>
          <Link to="/service" className="nav-link">Service</Link>
        </li>
        <li className={activeLink === 'home' ? 'active nav-item' : 'nav-item'}>
          <Link to="/about" className="nav-link">About</Link>
        </li>
      </ul>
    </nav> */}
    </>
  );
};

export default Navbar;
