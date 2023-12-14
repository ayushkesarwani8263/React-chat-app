import React from "react";

const Login = ({ name, setName, test }) => {
  return (
    <div style={{ height: "100vh", backgroundColor: "#343a40" }}>
      <div className="container">
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="col-md-3"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <div className="cust-div">
              <form
                action=""
                style={{
                  height: "151px",
                  padding: "10px",
                  backgroundColor: "rgb(0 7 18 / 25%)",
                  borderRadius: "10px",
                }}
                onSubmit={(e) => test(e)}
              >
                <div class="mb-3">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label"
                    style={{ color: "white" }}
                  >
                    User name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your user name"
                    value={name}
                    autoFocus="true"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div
                  class="mb-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <button type="submit" class="btn btn-success mb-3">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
