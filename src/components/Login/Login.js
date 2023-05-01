import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { Dropdown } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import database from "../../database";
import "../Login/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const options = [
    { key: "Normal", text: "Normal", value: "normal" },
    { key: "Admin", text: "Admin", value: "admin" },
  ];

  const handleSubmit = () => {
    const username = document.getElementById("user_name").value;
    const password = document.getElementById("pass_word").value;

    const user = database.find(
      (user) => user?.username === username && user?.password === password
    );

    user.isLoggedIn = true;

    if (user) {
      switch (user?.type) {
        case "admin":
          navigate("/admin");
          break;
        case "normal":
          navigate("/dashboard");
          break;
        default:
          navigate("/dashboard");
          break;
      }
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <MDBContainer fluid className="container">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-2 text-center">SIGN IN</h2>

              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Username"
                id="user_name"
                type="email"
                size="lg"
                style={{
                  padding: 10,
                }}
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Password"
                id="pass_word"
                type="password"
                size="lg"
                style={{
                  padding: 10,
                }}
              />

              <div className="user-selection">What type of user are you ?</div>

              <Dropdown
                id="user_type"
                placeholder="Type"
                fluid
                selection
                options={options}
                style={{
                  padding: 15,
                }}
              />

              <MDBBtn
                size="lg"
                style={{
                  marginTop: 30,
                }}
                onClick={handleSubmit}
              >
                Login
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
