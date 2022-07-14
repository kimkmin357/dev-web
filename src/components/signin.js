import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LOGIN_URL = "/api/signin";

const Signin = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current?.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(LOGIN_URL, {
        email: user,
        password: pwd,
      })
      .then((res) => {
        const accessToken = res?.data?.token;
        if (res.data.success === true) {
          alert("Success login!! " + accessToken);
          setUser("");
          setPwd("");
        } else {
          setErrMsg(res.data.error);
        }
      })
      .catch((err) => {
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err?.response?.status === 400) {
          setErrMsg("Missing Username or Password");
        } else if (err?.response?.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login Failed");
        }

        errRef.current?.focus();
      });
  };

  return (
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
        {errMsg}
      </p>

      <h1>Sign In</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Control
            type="email"
            id="email"
            placeholder="Enter email"
            ref={userRef}
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Control
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
        </Form.Group>
        <Button variant="warning" type="submit">
          Submit
        </Button>
      </Form>

      <p>
        Need an Account?
        <br />
        <span className="line">
          <Link to="/signup">Sign Up</Link>
        </span>
      </p>
    </section>
  );
};

export default Signin;
