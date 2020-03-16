import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';


const SimpleCrypto = require("simple-crypto-js").default;
const _secretKey = "superS3cr3t";
const simpleCrypto = new SimpleCrypto(_secretKey);
 

class Login extends Component {
   // API POST LOGIN
   constructor(props) {
      super(props);

      
      this.state = {
          userName: "",
          password: "",
          errorMsg: false,
      };
      this.submitHandler = this.submitHandler.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleChangeUsername = this.handleChangeUsername.bind(this);
  }
  handleChangeUsername = event => {
    this.setState({
        userName: event.target.value
    });
  }

  handleChangePassword = event => {
    this.setState({
        password: event.target.value
    });
  }

  serialize = obj => {
    let str = [];
    for (let p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  };

  submitHandler(e) { 
      
      e.preventDefault();      
      axios('http://localhost:3000/api/auth/login', {
          method: "POST",
          proxyHeaders: false,
          credentials: false,
          headers: {              
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept": "application/json"
          },
          data: this.serialize({
              userName: simpleCrypto.encrypt(this.state.userName),
              password: simpleCrypto.encrypt(this.state.password),            
          })
      }).then(response => {
          if(response.data.auth){               
              sessionStorage.setItem("token", response.data.token);                
              this.props.history.push('/dashboard');                
          }            
      }).catch(error => {                         
          this.setState({
              errorMsg:true
          })
      });
                  
  }
  // END API POST LOGIN 

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
       
          <Row className="justify-content-center">
            <Col md="8">
            { this.state.errorMsg && <Alert color="danger">Username or Password Incorrect!</Alert>}            
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                          type="text" 
                          placeholder="Username" 
                          autoComplete="username"  
                          value={this.state.userName}                        
                          onChange={this.handleChangeUsername}  />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                          type="password" 
                          placeholder="Password" 
                          autoComplete="current-password" 
                          onChange={this.handleChangePassword}                        
                          value={this.state.password}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.submitHandler}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
