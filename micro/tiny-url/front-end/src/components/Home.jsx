import { GiClick } from "react-icons/gi";

const Home = () => {
  return (
    <section className="container home-page">
      <header className="section-header">
        <div className="logo">
          <img src="/logo.gif" alt="logo" width="30%" />
        </div>

        <nav className="navbar">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="account">
          <ul>
            <li>
              <button className="btn-b">Login</button>
            </li>
            <li>
              <button className="btn-w">Signup</button>
            </li>
          </ul>
        </div>
      </header>

      <hr />

      <main className="section-main">
        <div className="main-one">
          <p className="flex items-end">
            You are just one click
            away...
            <GiClick />
          </p>
          <h1>TRANSFORM YOUR LINKS, TRANSFORM YOUR REACH</h1>
          <p>
            Shorten, share, and track your URLs effortlessly with our powerful
            URL shortener.
          </p>
          <div className="input-box">
            <input type="text" placeholder="Paste your url here and click" />
            <button className="btn-b">Go For It</button>
          </div>
          <div className="reviews">
            <div className="images">
              <img className="img1" src="/man.png" alt="1" width={30} />

              <img className="img2" src="/man2.png" alt="1" width={30} />

              <img className="img3" src="/woman.png" alt="1" width={30} />
            </div>
            <div className="rating">
              <div>⭐⭐⭐⭐⭐</div>
              <p>100+reviews</p>
            </div>
          </div>
        </div>
        <div className="main-two">
          <div className="login-page"></div>
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

export default Home;
