import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { ErrorPage } from "./pages/error";
import { HomePage } from "./pages/home";
import { homeLoader } from "./pages/home/loader";
import { SignInPage } from "./pages/sign-in";
import { UserPage } from "./pages/user";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./features/auth/authActions";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        errorElement: <ErrorPage />,
        loader: homeLoader,
        element: <HomePage />,
      },
      {
        path: "sign-in",
        errorElement: <ErrorPage />,
        element: <SignInPage />,
      },
      {
        path: "user",
        errorElement: <ErrorPage />,
        element: <UserPage />,
      },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
