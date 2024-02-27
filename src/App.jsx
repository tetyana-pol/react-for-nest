import React, { useContext, useEffect } from "react";
import { Routes, Route, Link, useNavigate, NavLink } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles.scss";

import { AuthContext } from "./components/AuthContext";
import { LoginPage } from "./pages/LoginPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { RequireAuth } from "./components/RequireAuth";
import { FormPage } from "./pages/FormPage";
import { Loader } from "./components/Loader";
import { HomePage } from "./pages/HomePage";
import { usePageError } from "./hooks/usePageError";

function App() {
  const navigate = useNavigate();
  const [error, setError] = usePageError();
  const { isChecked, user, logout, checkAuth } = useContext(AuthContext);

  useEffect(() => {
    checkAuth();
  }, []);

  if (!isChecked) {
    return <Loader />;
  }

  return (
    <>
      <nav
        className="navbar has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-start">
          <NavLink to="/" className="navbar-item">
            Home
          </NavLink>

          <NavLink to="/add" className="navbar-item">
            Add new ad
          </NavLink>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {user ? (
                <button
                  className="button is-light has-text-weight-bold"
                  onClick={() => {
                    logout()
                      .then(() => {
                        navigate("/");
                      })
                      .catch((error) => {
                        setError(error.response?.data?.message);
                      });
                  }}
                >
                  Log out
                </button>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="button is-light has-text-weight-bold"
                  >
                    Sign up
                  </Link>

                  <Link
                    to="/login"
                    className="button is-success has-text-weight-bold"
                  >
                    Log in
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="section">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="register" element={<RegistrationPage />} />

            <Route path="login" element={<LoginPage />} />

            <Route path="/" element={<RequireAuth />}>
              <Route path="add" element={<FormPage />} />
            </Route>
          </Routes>
        </section>

        {error && <p className="notification is-danger is-light">{error}</p>}
      </main>
    </>
  );
}

export default App;
