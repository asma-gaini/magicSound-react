import { useState } from "react";
import "./Login.css";

//  **************************************************** DATA _ LOGIN INFORMATION  ****************************************************
const otherAppInfo = [
  {
    otherApp_name: "google",
    otherApp_outlineColor: "btn-outline-danger",
    otherApp_target: "#!",
    otherApp_svgSrc: "../image/svg/google.svg",
  },
  {
    otherApp_name: "facebook",
    otherApp_outlineColor: "btn-outline-primary",
    otherApp_target: "#!",
    otherApp_svgSrc: "../image/svg/facebook.svg",
  },
  {
    otherApp_name: "twitter",
    otherApp_outlineColor: "btn-outline-info",
    otherApp_target: "#!",
    otherApp_svgSrc: "../image/svg/twitter.svg",
  },
  {
    otherApp_name: "apple",
    otherApp_outlineColor: "btn-outline-dark",
    otherApp_target: "#!",
    otherApp_svgSrc: "../image/svg/apple.svg",
  },
];

function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="p-3 p-md-4 p-xl-5 loginMain">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
            <div className="card border border-light-subtle rounded-4">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-5">
                      <div className="text-center mb-4">
                        <img
                          src="../image/logo.webp"
                          className="loginLogo"
                          alt="logo"
                        />
                      </div>
                      <h4 className="text-center">
                        {" "}
                        Welcome back you've been missed!
                      </h4>
                    </div>
                  </div>
                </div>
                <form action="#!" onSubmit={handleSubmit}>
                  <div className="row gy-3 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control inputLogin"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          required="required"
                        />
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control inputLogin"
                          name="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          required="required"
                        />
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check mb-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="remember_me"
                          id="remember_me"
                          value=""
                        />
                        <label
                          htmlFor="remember_me"
                          className="form-label text-secondary"
                        >
                          Keep me logged in
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn bsb-btn-xl btn-primary"
                        >
                          Log in now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-12">
                    <hr className="mt-5 mb-4 border-secondary-subtle" />
                    <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                      <a
                        href="#!"
                        className="link-secondary text-decoration-none"
                      >
                        Create new account
                      </a>
                      <a
                        href="#!"
                        className="link-secondary text-decoration-none"
                      >
                        Forgot password
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p className="mt-5 mb-5">Or continue with : </p>
                    <div className="d-flex gap-2 gap-sm-3 justify-content-center">
                      {otherAppInfo.map((item) => (
                        <a
                          href={item.otherApp_target}
                          className={`btn btn-lg p-3 lh-1 ${item.otherApp_outlineColor}`}
                        >
                          <img
                            src={item.otherApp_svgSrc}
                            alt={item.otherApp_name}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginUser;
