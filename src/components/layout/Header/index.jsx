import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const isUserPage = location.pathname === "/user";
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div className="main-nav-items">
        {isUserPage ? (
          <>
            <a className="main-nav-item" href="./user.html">
              <i className="fa fa-user-circle"></i>
              Tony
            </a>
            <a className="main-nav-item" href="./index.html">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a>
          </>
        ) : (
          <a className="main-nav-item" href="./sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        )}
      </div>
    </nav>
  );
};
