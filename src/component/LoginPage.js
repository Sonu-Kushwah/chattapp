import React from "react";
import {Link} from 'react-router-dom';
function LoginPage() {
  return (
    <>
      <div className="login_page singup_page">
          <div className="login_box">
            <h4 className="text-center mb-3"><i class="fa-duotone fa-messages"></i>Connect Me</h4>
            <div className="login_main">
              <div className="login_top">
                <h5>Login</h5>
                <form>
                  <div className="form-group">
                    <label class="form-label" for="Email-address">
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Youremail@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <div className="d-flex justify-content-between">
                      <label class="form-label" for="email-address">
                        Password
                      </label>
                      <a href="#" className="forgot">
                        Forgot it?
                      </a>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="password"
                    />
                  </div>
                  <div className="form-group">
                  <Link to='/Dashboard' className="btn btn-primary form-control">Account Login</Link>  
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
                Don't have an account? <Link to='/SignUp'>Register</Link>
              </p>
            </div>
          </div>
      </div>
    </>
  );
}

export default LoginPage;
