import { useNavigate } from "react-router-dom";
import { login } from "../../service/user.service";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

export const SignInPage = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const submitForm = async (data) => {
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
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              {...register("username", { required: true })}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              {...register("remember-me")}
            />
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
