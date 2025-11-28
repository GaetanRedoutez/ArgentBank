import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../features/auth/authActions";
import { userProfile } from "../../../features/user/userActions";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { id, firstName } = useSelector((state) => state.user);

  useEffect(() => {
    if (!id) {
      dispatch(userProfile());
    }
  }, [id, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("./");
  };

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
        {isAuthenticated ? (
          <>
            <a className="main-nav-item" href="./user">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </a>
            <a className="main-nav-item" onClick={handleLogout}>
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
