import React from 'react';

const Footer = () => {
  return (
    <footer className="niti-footer">
      <style>{`
        .niti-footer {
          background: linear-gradient(90deg, #00204A 0%, #004D9D 100%);
          color: white;
          padding: 2rem 4rem 2rem 4rem;
          font-family: 'Work Sans', sans-serif;
          font-size: 14px;

        }
        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        
          max-width: 1400px;
          margin: 0 auto;
        }
        .footer-column {

          min-width: 200px;
        }
        .footer-column h4 {
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .footer-column a,
        .footer-column p {
          color: white;
          text-decoration: none;
          margin-bottom: 0.5rem;
          display: block;
          line-height: 1.6;
        }
        .footer-column a:hover {
          text-decoration: underline;
        }
        .legal {
          border-top: 1px solid rgba(255,255,255,0.2);
          margin-top: 2rem;
          padding-top: 1rem;
          text-align: center;
          font-size: 11px;
          color: #ccc;
        }
        .social-icons {
          margin-top: 1rem;
          display: flex;
          gap: 1rem;
        }
        .social-icons img {
          width: 24px;
          height: 24px;
        }
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="footer-container gap-y-[2rem]">
        <div className="footer-column ">
         <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="34" fill="none" viewBox="0 0 40 34"><path fill="#2D8686" d="m17.836 33.154-14.117-13.1c-.328-.303-.64-.63-.93-.963h6.797a4.38 4.38 0 0 0 4.039-2.68l.82-1.956 3.852 8.503a1.85 1.85 0 0 0 1.672 1.095 1.9 1.9 0 0 0 1.718-1.033L25 16.427l.133.264a4.38 4.38 0 0 0 3.914 2.408h8.164a12 12 0 0 1-.93.962L22.164 33.154A3.18 3.18 0 0 1 20 34a3.18 3.18 0 0 1-2.164-.846m21.516-17.79H29.039a.64.64 0 0 1-.562-.342l-1.813-3.595a1.89 1.89 0 0 0-1.68-1.033c-.71 0-1.359.396-1.68 1.033l-3.234 6.43-3.984-8.846a1.87 1.87 0 0 0-1.734-1.094 1.88 1.88 0 0 0-1.704 1.149l-2.484 5.925a.62.62 0 0 1-.578.38H1.25c-.203 0-.39.031-.57.086A11.6 11.6 0 0 1 0 11.55v-.45C0 5.671 3.945 1.043 9.328.15c3.563-.59 7.188.567 9.735 3.099l.937.932.938-.932A11.21 11.21 0 0 1 30.672.15C36.055 1.044 40 5.672 40 11.101v.45c0 1.312-.219 2.601-.648 3.812"></path></svg>
        <span className="brand">SwasthBharath</span>
      </div>
      <p class="text-[#EBEAEA] text-14-scale text-14-scale-lg md:w-[22.125rem] py-2 ">A GOI initiative to ensure holistic, lifelong well-being through digital tools, expert knowledge, and continuous support.</p>
          <div className="social-icons">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="Twitter" />
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" />
          </div>
        </div>

        <div className="footer-column">
          <h4></h4>
          <a href="#"></a>
        </div>

        <div className="footer-column">
          <h4>Quick as</h4>
          <a href="#">About</a>
          <a href="#">Knowledge Center</a>
          <a href="#">Community</a>
          <a href="#">Help</a>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <a href="#">Life Stages</a>
          <a href="#">Nutrition Tips</a>
          <a href="#">Exercise Plans</a>
        </div>

        <div className="footer-column">
          <h4>Contact With Us</h4>
          <a href="#">contact@healthhub.in</a>
          <a href="#">+91 9999999999</a>
        
        </div>

        

      
      </div>

      <div className="legal">
        <p>© 2025 SwasthBharath. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
