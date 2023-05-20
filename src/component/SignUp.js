import React from "react";
import { Link } from "react-router-dom/dist";

function SignUp() {
  return (
    <div className="login_page">
        <div className="login_box">
          <h4 className="text-center mb-3">
            <i class="fa-duotone fa-messages"></i>Connect Me
          </h4>
          <div className="login_main">
            <div className="login_top">
              <h5>Login</h5>
              <form>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label class="form-label" for="Your Name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label class="form-label" for="email-address">
                        Email Addresh
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Youremail@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label class="form-label" for="password">
                        Password
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label class="form-label" for="password-reapeat">
                        Password Repeat
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Password again"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div class="form-check mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="muteFor"
                        id="privacy-term-agree"
                      />
                      <label class="form-check-label" for="privacy-term-agree">
                        {" "}
                        I agree with <a href="#">privacy policy &amp; terms</a>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <button className="btn btn-primary form-control">
                    Account Register
                  </button>
                </div>
              </form>
            </div>
            <div className="login_bottom">
              <p>OR USE WITH</p>
              <ul>
                <li>
                  <button>
                    <i class="fa-brands fa-google"></i>Google
                  </button>
                </li>
                <li>
                  <button>
                    <i class="fa-brands fa-facebook"></i>Facebook
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom_content mt-2 text-center">
            <p>
              Already have an account? <Link to='/'>Login</Link>
            </p>
          </div>
        </div>
    </div>
  );
}

export default SignUp;
