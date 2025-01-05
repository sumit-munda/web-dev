import { GiClick } from "react-icons/gi";
import { BsQrCode } from "react-icons/bs";

const Dashboard = () => {
  return (
    <section className="container dashboard">
      <header className="section-header">
        <div className="logo">
          <img src="/logo.gif" alt="logo" width="40%" />
        </div>

        <div className="dashboard-page">
          <div className="domain">
            <img src="/domain.png" alt="domain" width={150} height="auto" />
          </div>

          <div>
            <ul className="profile">
              <li>
                <i className="fa-solid fa-gear"></i>
              </li>
              <li>
                <i className="fa-regular fa-bell"></i>
              </li>
              <li className="logged-in">
                <img className="img2" src="/man2.png" alt="1" width={20} />{" "}
                Marcos
                <i className="fa-solid fa-caret-down"></i>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <hr />

      <main className="section-main">
        <div className="main-one">
          <div className="top">
            <ul>
              <li>
                <a href="">
                  <i className="fa-regular fa-object-group"></i>Dashboard
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-solid fa-link"></i>Links
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-solid fa-headset"></i>
                  Support
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-regular fa-circle-question"></i>FAQs
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-solid fa-gear"></i>Settings
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom">
            <ul>
              <li>
                <a href="">
                  <i className="fa-solid fa-arrow-right-from-bracket rotate-180"></i>
                  LogOut{" "}
                  <span
                    className="text-white
                   hover:text-black"
                  >
                    &nbsp; &nbsp; &nbsp;
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-two">
          <div className="login-page"></div>
        </div>
        <div className="main-three">
          <div className="input-box">
            <h2>CREATE NEW LINK</h2>
            <p>Create, short, and manage your links</p>
            <div className="inn-input-box">
              <input type="text" placeholder="Paste your url here and click" />
              <button className="btn-b">Go For It</button>
            </div>
          </div>
          <div className="link-box">
            <p>CUSTOMIZED LINK</p>
            <div className="site-image">
              <img src="/logo.gif" alt="site-image" />
            </div>
            <a href="">
              <i className="fa-solid fa-link"></i> tinyurl.com
            </a>
          </div>
          <div className="qr-box">
            <div className="head">
              <span>QR CODE</span>
              <button>Download PNG</button>
            </div>
            <div className="qr-details">
              <BsQrCode className="qr-code"/>
              <div className="more-details">
                <div className="link">
                  <i className="fa-solid fa-link"></i> tinyurl.com
                </div>
                <div className="date">
                  <i className="fa-solid fa-calendar-days"></i> 22 December 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <hr />

      <footer className="section-footer">
        <div className="rights">
          <ul>
            <li className="flex justify-start items-end gap-2">
              <img src="/logo.gif" alt="logo" width="50" /> &copy; 2025
            </li>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Policy</a>
            </li>
          </ul>
        </div>

        <div className="social-icons">
          <a href="">
            <i className="fa-brands fa-discord"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Dashboard;
