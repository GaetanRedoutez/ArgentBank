import { useNavigate } from "react-router-dom";
import { login } from "../../service/user.service";
import { toast } from "react-toastify";

export const SignInPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); // e.target est le <form>
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      rememberMe: formData.get("remember-me") === "on",
    };
    try {
      const res = await login(data.username, data.password);

      if (res.status == 200) {
        navigate("/user");
      }
    } catch {
      toast.error("Failed to login");
    }
  };
  return (
    <main class="main bg-dark">
      <section class="sign-in-content">
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" name="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};
