import { useState } from "react";
import "./Login.css";

function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section class="p-3 p-md-4 p-xl-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
            <div class="card border border-light-subtle rounded-4">
              <div class="card-body p-3 p-md-4 p-xl-5">
                <div class="row">
                  <div class="col-12">
                    <div class="mb-5">
                      <div class="text-center mb-4">
                        <img
                          src="../image/logo.webp"
                          class="loginLogo"
                          alt="logo"
                        />
                      </div>
                      <h4 class="text-center">
                        {" "}
                        Welcome back you've been missed!
                      </h4>
                    </div>
                  </div>
                </div>
                <form action="#!" onSubmit={handleSubmit}>
                  <div class="row gy-3 overflow-hidden">
                    <div class="col-12">
                      <div class="form-floating mb-3">
                        <input
                          type="email"
                          class="form-control inputLogin"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          required="required"
                        />
                        <label for="email" class="form-label">
                          Email
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating mb-3">
                        <input
                          type="password"
                          class="form-control inputLogin"
                          name="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          required="required"
                        />
                        <label for="password" class="form-label">
                          Password
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-check mb-3">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="remember_me"
                          id="remember_me"
                          value=""
                        />
                        <label
                          for="remember_me"
                          class="form-label text-secondary"
                        >
                          Keep me logged in
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="d-grid">
                        <button
                          type="submit"
                          class="btn bsb-btn-xl btn-primary"
                        >
                          Log in now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div class="row">
                  <div class="col-12">
                    <hr class="mt-5 mb-4 border-secondary-subtle" />
                    <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                      <a href="#!" class="link-secondary text-decoration-none">
                        Create new account
                      </a>
                      <a href="#!" class="link-secondary text-decoration-none">
                        Forgot password
                      </a>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <p class="mt-5 mb-5">Or continue with : </p>
                    <div class="d-flex gap-2 gap-sm-3 justify-content-center">
                      <a
                        href="#!"
                        class="btn btn-lg btn-outline-danger p-3 lh-1"
                      >
                        <img src="../image/svg/google.svg" alt="google" />
                      </a>
                      <a
                        href="#!"
                        class="btn btn-lg btn-outline-primary p-3 lh-1"
                      >
                        <img src="../image/svg/facebook.svg" alt="facebook" />
                      </a>
                      <a href="#!" class="btn btn-lg btn-outline-info p-3 lh-1">
                        <img src="../image/svg/twitter.svg" alt="twitter" />
                      </a>
                      <a href="#!" class="btn btn-lg btn-outline-dark p-3 lh-1">
                        <img src="../image/svg/apple.svg" alt="apple" />
                      </a>
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
