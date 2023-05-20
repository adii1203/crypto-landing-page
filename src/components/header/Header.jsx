import logo from '../../assets/images/logo.png'
import '../header/styles.css'

function Header() {
  return (
    <>
      <header>
        <div className="_wrapper">
          <div className="navigation">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <ul className="nav-list">
              <li className="links">
                <a href="/">Wallet</a>
              </li>
              <li className="links">
                <a href="/">Exchange</a>
              </li>
              <li className="links">
                <a href="/">Explore</a>
              </li>
              <li className="links">
                <a href="/">Institutional</a>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <button className="login_btn">Log in</button>
            <button className="signup_btn">Sign up</button>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;