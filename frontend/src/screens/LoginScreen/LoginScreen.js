<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { login } from "../../actions/userActions";
// import { login } from "../../actions/userActions";
import MainScreen from "../../components/MainScreen";
import "./LoginScreen.css";

 import { useDispatch, useSelector } from "react-redux";

const LoginScreen = ({ history }) =>  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;


  useEffect(() => {
    // const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

   const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <MainScreen title="LOGIN">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
}

export default LoginScreen;
=======
// import axios from 'axios';
// import React, { useState } from 'react'
// import { Button, Col, Form, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import MainScreen from '../../components/MainScreen';
// import "./LoginScreen.css"

// const LoginScreen = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

  




// return(
//     <MainScreen title="LOGIN">
//       <div className="loginContainer">
//         {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
//         {loading && <Loading />} */}
//         <Form onSubmit={submitHandler}>
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               value={email}
//               placeholder="Enter email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={password}
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>
// <br/>
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//         <Row className="py-3">
//           <Col>
//             Świeżak ? <Link to="/register">Rejestracja</Link>
//           </Col>
//         </Row>
//       </div>
//     </MainScreen>
//   );



// export default LoginScreen;
>>>>>>> 9eee450410ddb1edc8cb886378715d5f5c106ac0
