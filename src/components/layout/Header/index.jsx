import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const isUserPage = location.pathname === "/user";
  return (
    <nav class="main-nav">
      <a class="main-nav-logo" href="/">
        <img
          class="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div class="main-nav-items">
        {isUserPage ? (
          <>
            <a class="main-nav-item" href="./user.html">
              <i class="fa fa-user-circle"></i>
              Tony
            </a>
            <a class="main-nav-item" href="./index.html">
              <i class="fa fa-sign-out"></i>
              Sign Out
            </a>
          </>
        ) : (
          <a class="main-nav-item" href="./sign-in">
            <i class="fa fa-user-circle"></i>
            Sign In
          </a>
        )}
      </div>
    </nav>
  );
};
