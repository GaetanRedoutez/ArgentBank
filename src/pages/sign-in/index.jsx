import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../features/auth/authSlice";
import { login } from "../../service/user.service";

export const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const { register, handleSubmit } = useForm();

  const submitForm = async (data) => {
    dispatch(loginStart());

    try {
      const res = await login(data.username, data.password);

      if (res.status === 200) {
        dispatch(
          loginSuccess({
            user: data.username,
            token: res.data.body.token,
          })
        );

        navigate("/user");
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
      toast.error(error.message);
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
              disabled={loading}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              disabled={loading}
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
          <button className="sign-in-button" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
      </section>
    </main>
  );
};
