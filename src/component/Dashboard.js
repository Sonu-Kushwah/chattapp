import React from "react";
import { Link } from "react-router-dom/dist";
function Dashboard() {
  return (
    <>
      <section className="dashoard">
        <div className="row g-0">
          <div className="col-lg-3 col-md-3">
            <div className="dashboard_left">
              <div className="dashboard_header">
                <div className="profile">
                  <ul>
                    <li>
                      <div className="profile_icon">
                        <p>SK</p>
                        <span></span>
                      </div>
                    </li>
                    <li>
                      <div className="profile_name">
                        <h5>Sonu Kushwah</h5>
                      </div>
                    </li>
                  </ul>
                  <div className="profile_view">
                    <i class="fa-solid fa-user"></i>
                  </div>
                </div>
                <div className="form-group search">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Chat..."
                  />
                  <span>
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </span>
                </div>
              </div>

              <div className="tabs">
                <div
                  class="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    class="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    <div className="profile">
                      <ul>
                        <li>
                          <div className="profile_icon">
                            <p>SK</p>
                            <span></span>
                          </div>
                        </li>
                        <li>
                          <div className="profile_name">
                            <h5>Sonu Kushwah</h5>
                          </div>
                        </li>
                      </ul>
                      <div className="profile_view">
                        <p>8:39 PM</p>
                      </div>
                    </div>
                  </a>
                  <a
                    class="nav-link"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <div className="profile">
                      <ul>
                        <li>
                          <div className="profile_icon">
                            <p>HK</p>
                            <span></span>
                          </div>
                        </li>
                        <li>
                          <div className="profile_name">
                            <h5>Hunny Kushwah</h5>
                          </div>
                        </li>
                      </ul>
                      <div className="profile_view">
                        <p>6:30 AM</p>
                      </div>
                    </div>
                  </a>
                  <a
                    class="nav-link"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    <div className="profile">
                      <ul>
                        <li>
                          <div className="profile_icon">
                            <p>JK</p>
                            <span></span>
                          </div>
                        </li>
                        <li>
                          <div className="profile_name">
                            <h5>Jyoti Kushwah</h5>
                          </div>
                        </li>
                      </ul>
                      <div className="profile_view">
                        <p>9:25 AM</p>
                      </div>
                    </div>
                  </a>
                  <a
                    class="nav-link"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    <div className="profile">
                      <ul>
                        <li>
                          <div className="profile_icon">
                            <p>PK</p>
                            <span></span>
                          </div>
                        </li>
                        <li>
                          <div className="profile_name">
                            <h5>Priya Kushwah</h5>
                          </div>
                        </li>
                      </ul>
                      <div className="profile_view">
                        <p>12:00 PM</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            {/**/}
            <div className="dashboard_right">
              <div className="profile">
                <ul>
                  <li>
                    <div className="profile_icon">
                      <p>PK</p>
                      <span></span>
                    </div>
                  </li>
                  <li>
                    <div className="profile_name">
                      <h5>Priya Kushwah</h5>
                      <p>last seen today at 7:55 PM</p>
                    </div>
                  </li>
                </ul>
                <div className="profile_view">
                  <Link to="/">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </Link>
                </div>
              </div>
              <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div className="recived">
                  <ul>
                    <li>
                      <p className="time">
                        <span>Priya Kushwah,</span>12:23
                      </p>
                      <p className="send_message">How are you?</p>
                    </li>
                  </ul>
                </div>
                <div className="send">
                  <ul>
                    <li>
                      <p className="time">
                        <span>Sonu Kushwah,</span>12:21
                      </p>
                      <p className="send_message">Hello</p>
                    </li>
                  </ul>
                </div>
                <div className="user_text">
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type a message"
                    />
                    <a>
                      <img src="assets/images/send.png" className="img-fluid" />
                    </a>
                  </form>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <div className="recived">
                  <ul>
                    <li>
                      <p className="time">
                        <span>Priya Kushwah,</span>12:23
                      </p>
                      <p className="send_message">How are you?</p>
                    </li>
                  </ul>
                </div>
                <div className="send">
                  <ul>
                    <li>
                      <p className="time">
                        <span>Sonu Kushwah,</span>12:21
                      </p>
                      <p className="send_message">Hello</p>
                    </li>
                  </ul>
                </div>
                <div className="user_text">
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type a message"
                    />
                    <a>
                      <img src="assets/images/send.png" className="img-fluid" />
                    </a>
                  </form>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                <div className="recived">
                  <ul>
                    <li>
                      <p className="time">
                        <span>Priya Kushwah,</span>12:23
                      </p>
                      <p className="send_message">How are you?</p>
                    </li>
                  </ul>
                </div>
                <div className="send">
                  <ul>
                    <li>
                      <p className="time">
                        <span>Sonu Kushwah,</span>12:21
                      </p>
                      <p className="send_message">Hello</p>
                    </li>
                  </ul>
                </div>
                <div className="user_text">
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type a message"
                    />
                    <a>
                      <img src="assets/images/send.png" className="img-fluid" />
                    </a>
                  </form>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <div className="recived">
                  <ul>
                    <li>
                      <p className="time">
                        <span>Priya Kushwah,</span>12:23
                      </p>
                      <p className="send_message">How are you?</p>
                    </li>
                  </ul>
                </div>
                <div className="send">
                  <ul>
                    <li>
                      <p className="time">
                        <span>Sonu Kushwah,</span>12:21
                      </p>
                      <p className="send_message">Hello</p>
                    </li>
                  </ul>
                </div>
                <div className="user_text">
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type a message"
                    />
                    <a>
                      <img src="assets/images/send.png" className="img-fluid" />
                    </a>
                  </form>
                </div>
              </div>
              </div>
            </div>
            {/**/}
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
