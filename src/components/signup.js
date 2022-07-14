import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//const USER_REGEX = /^[A-z][A-z0-9-_][@][A-z0-9-_]{3,23}$/;
const USER_REGEX =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const PWD_REGEX = /^[A-Za-z0-9]{8,20}$/    ///^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/api/signup";

const Signup = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [matchPwd, setMatchPwd] = useState("");

  const [validUser, setValidUser] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [validMatchPwd, setValidMatchPwd] = useState(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);
  useEffect(() => {
    setValidUser(USER_REGEX.test(user));
  }, [user]);
  useEffect(() => {
    //setValidPwd(PWD_REGEX.test(pwd));
    setValidMatchPwd(pwd === matchPwd);
  }, [pwd, matchPwd]);
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passedUser = USER_REGEX.test(user);
    //const passedPwd = PWD_REGEX.test(pwd);
    if (!passedUser ) {
      setErrMsg("Invalid Entry");
      return;
    }

    await axios
      .post(REGISTER_URL, {
        email: user,
        password: pwd,
      })
      .then((res) => {
        if (res.data.success === true) {
            setSuccess(true);
        } else {
            setErrMsg(res.data.error);
        }

        // clear state and controlled inputs
      })
      .catch((err) => {
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err?.response?.status === 409) {
          setErrMsg("Username Taken");
        } else {
          setErrMsg("Registeration Failed");
        }

        errRef.current?.focus();
      });
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="/clock">Main Page</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>

            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Control
                type="text"
                id="username"
                placeholder="Enter email"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                aria-invalid={validUser ? "false" : "true"}
                aria-describedby="uidnote"
              />
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicPassword">
              <Form.Control
                type="password"
                id="password"
                placeholder="Enter password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? "true" : "true"}
                aria-describedby="pwdnote"
              />
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicPassword">
              <Form.Control
                type="password"
                id="confirm_pwd"
                placeholder="Confirm password"
                onChange={(e) => {
                  setMatchPwd(e.target.value);
                }}
                value={matchPwd}
                required
                aria-invalid={validMatchPwd ? "false" : "true"}
                aria-describedby="confirmnote"
              />
            </Form.Group>

            <Button
              variant="warning"
              type="submit"
            >
              Submit
            </Button>
          </form>

          <p>
            Already registered?
            <br />
            <span className="line">
              <Link to="/signin">Sign In</Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Signup;
