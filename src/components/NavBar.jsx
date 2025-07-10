"use client"
import React, { useState,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getStages } from '../services/content';

const Navbar = () => {
  const location = useLocation();
  const [fontSize, setFontSize] = useState('medium');
 const [loading,setLoading]=useState(false)
 const [stagesData,setStagesData]=useState()
  const handleFontDecrease = () => setFontSize('small');
  const handleFontIncrease = () => setFontSize('large');

  const fontSizeMap = {
    small: '14px',
    medium: '16px',
    large: '20px',
  };

  // Map route paths to nav link keys
  const navLinks = [
    { to: '/', label: 'Home', match: /^\/$/ },
    { to: '/about', label: 'About', match: /^\/about/ },
    { to: '/stage1', label: 'Life Stages', match: /^\/stage1/ },
    { to: '/knowledge-center', label: 'Knowledge Center', match: /^\/knowledge-center/ },
    { to: '/data', label: 'Data', match: /^\/data/ },
    { to: '/help', label: 'Help', match: /^\/help/ },
  ];

  const fetchStages = async () => {
    setLoading(true)
    try {
      const data = await getStages()

      setStagesData(data?.data)
    } catch (err) {
      console.log(err.message)
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchStages()
  }, [])
  return (

    <nav >
      <div className=' py-[1rem] px-[2rem] bg-white flex justify-between items-center'>
        <div className="logo ">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="34" fill="none" viewBox="0 0 40 34"><path fill="#2D8686" d="m17.836 33.154-14.117-13.1c-.328-.303-.64-.63-.93-.963h6.797a4.38 4.38 0 0 0 4.039-2.68l.82-1.956 3.852 8.503a1.85 1.85 0 0 0 1.672 1.095 1.9 1.9 0 0 0 1.718-1.033L25 16.427l.133.264a4.38 4.38 0 0 0 3.914 2.408h8.164a12 12 0 0 1-.93.962L22.164 33.154A3.18 3.18 0 0 1 20 34a3.18 3.18 0 0 1-2.164-.846m21.516-17.79H29.039a.64.64 0 0 1-.562-.342l-1.813-3.595a1.89 1.89 0 0 0-1.68-1.033c-.71 0-1.359.396-1.68 1.033l-3.234 6.43-3.984-8.846a1.87 1.87 0 0 0-1.734-1.094 1.88 1.88 0 0 0-1.704 1.149l-2.484 5.925a.62.62 0 0 1-.578.38H1.25c-.203 0-.39.031-.57.086A11.6 11.6 0 0 1 0 11.55v-.45C0 5.671 3.945 1.043 9.328.15c3.563-.59 7.188.567 9.735 3.099l.937.932.938-.932A11.21 11.21 0 0 1 30.672.15C36.055 1.044 40 5.672 40 11.101v.45c0 1.312-.219 2.601-.648 3.812"></path></svg>
        <span className="brand" style={{ fontSize: '1.5rem' }}>SwasthBharath</span>
      </div>
 <div className="nav-options">
        <div className="flex gap-[2rem] !text-[black] ">
          <button onClick={handleFontDecrease}>A-</button>
          <button onClick={handleFontIncrease}>A+</button>
        </div>
        <select className="ml-[1rem]">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
       
        <button className="search-btn" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        <button className="login-btn" aria-label="Login">
          Login
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2"/><path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
     
        <button className="register-btn" aria-label="Register">Register</button>
      </div>
      </div>
      <div className="navbar ">
      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(to right, #003087, #0055A4);
            padding: 1rem 2rem;
            color: white;
            font-family: 'Work Sans', sans-serif;
          }
          .logo {
            display: flex;
            align-items: center;
          }
          .brand {
            font-size: 1.5rem;
            font-weight: bold;
            color:#2D8686;
            margin-left: 0.5rem;
          }
          .nav-links {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
          }
          .nav-links li {
            margin: 0 1rem;
          }
          .nav-links a {
            font-size:16px;
            color: white;
            text-decoration: none;
            position: relative;
            transition: color 0.2s;
          }
          .nav-links a:hover {
            color: #FFF9C4; /* light yellow */
          }
          .nav-links a::after {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 100%;
            height: 3px;
            background: #FFD600; /* yellow */
            opacity: 0;
            transform: scaleX(0);
            transition: opacity 0.2s, transform 0.2s;
          }
          .nav-links a:hover::after {
            opacity: 1;
            transform: scaleX(1);
          }
          .nav-links a.active::after {
            opacity: 1;
            transform: scaleX(1);
          }
          .nav-options {
            display: flex;
            align-items: center;
          }
          .font-size button {
            background: none;
            border: none;
            color: white;
            margin: 0 0.5rem;
            cursor: pointer;
          }
          .language {
            background: none;
            border: none;
            color: white;
            margin-left: 1rem;
          }
          .search-btn, .login-btn, .register-btn {
            background:rgb(51, 88, 155);
            color: white;
            border: none;
            border-radius: 2rem;
            padding: 0.5rem 1.5rem;
            margin-left: 1rem;
            display: flex;
            align-items: center;
            font-weight: 600;
            font-size: 1rem;
            gap: 0.5rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            transition: background 0.2s;
          }
          .search-btn:hover, .login-btn:hover, .register-btn:hover {
            background: #223A60;
          }
          .languages{
            background:rgb(51, 88, 155);
            }
            .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          color: black;
          min-width: 180px;
          border-radius: 4px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.2s ease;
          z-index: 100;
        }
           .nav-links {
          list-style: none;
          display: flex;
          margin: 0;
          padding: 0;
        }
        .nav-links li {
          margin: 0 1rem;
          position: relative;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
          font-size: ${fontSizeMap[fontSize]};
          position: relative;
        }
        .nav-links a:hover {
          color: #FFF9C4;
        }
          .nav-links li:hover .dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .dropdown a {
          display: block;
          padding: 10px 15px;
          color: #333;
          text-decoration: none;
        }
        .dropdown a:hover {
          background-color: #f1f1f1;
          color: #003087;
        }
        `}
      </style>
     
      
      
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              to={link.label !== "Life Stages"?link.to:""}
              className={link.match.test(location.pathname) ? "active" : ""}
            >
              {link.label}
            </Link>

            {link.label === "Life Stages" && (
              <div className="dropdown">
                {stagesData?.map((label, idx) => (
                  <Link key={idx} to={`/stageDetails/${label.documentId}`}>
                    {label?.Title}
                    
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      {/* <div className="nav-options">
        <div className="font-size">
          <button onClick={handleFontDecrease}>A-</button>
          <button onClick={handleFontIncrease}>A+</button>
        </div>
        <select className="language">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
       
        <button className="search-btn" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        <button className="login-btn" aria-label="Login">
          Login
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2"/><path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
     
        <button className="register-btn" aria-label="Register">Register</button>
      </div> */}
      </div>
    </nav>
  );
};

export default Navbar;