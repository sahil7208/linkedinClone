import React from 'react';
import {auth, googleProvider} from "./firebase";
import styled from "styled-components";
import {useState} from 'react';
import {Navigate} from 'react-router-dom';
import { connect } from "react-redux";
import signInAPI from './index'

const Log = (props) => {
  
  return (
    <>
      <Container>
        {
          props.user && <Navigate to ="/home"/>
        }
        <Nav>
         <a href ="/">
          <img src ="login-logo.svg" height = "100" width = "100" alt ="">
          </img></a> 
          <div>
            <Join>
              Join Now
            </Join>
            <SignIn>Sign in</SignIn>
          </div>
        </Nav>
        <Section>
          <Hero>
            <h1>Welcome to your professional comunity</h1>
            <img src="login-hero.svg" alt=""/>
          </Hero>
          <Form>
            <Google onClick={()=>props.signIn()}>
              <img src="google.svg" alt=""/>
              Sign in with Google
            </Google>
            {/* {isLoggedIn && <Navigate to="/home" />} */}
          </Form>
          </Section>
      </Container>
    </>
  );
};
const Container = styled.div`
padding: 0px;
`;
const Nav = styled.nav`
max-width: 1283px;
// margin: auto;
padding: 12px 0px 16px;
display: flex;
align-items: center;
position: relative;
justify-content: space-between;
flex-wrap: no-wrap;
& > a {
  width: 135px;
  height: 34px;
  margin-left: 20px;
  @media(max-width: 768px){
    padding: 0 5px;
    
  }
}
`;
const Join =styled.a`
font-size: 16px;
padding: 10px 12px;
text-decoration: none;
border-radius: 4px;
color: rgba(0,0,0,0.6);
margin-right: 12px;
&:hover{
  background-color: rgba(0,0,0,0.08);
  color: rgba(0,0,0,0.9);
  text-decoration: none;
}
`;
const SignIn =styled.a`
box-shadow: inset 0 0 0 1px #0a66c2;
color: #0a66c2;
border-radius: 24px;
transition-duration: 167ms;
font-size: 16px;
font-weight: 600;
line-height: 40px;
padding: 10px;
text-align: center;
background-color: rgba(0,0,0,0);
&:hover{
  background-color: rgba(112, 181, 249, 0.15);
  color: #0a66c2;
  text-decoration: none;
}
`;
const Section = styled.section`
display: flex;
align-items: start;
min-height: 700px;
padding-bottom: 138px;
padding-top: 40px;
padding: 60px 0;
position: relative;
flex-wrap: wrap;
width: 100%;
max-width: 1323px;
align-items: center;
margin:auto;
min-height: 0px;
`;

const Hero = styled.div`
width: 100%;
h1{
  padding-bottom: 0;
  width: 55%;
  font-size: 56px;
  color: #2977c9;
  font-weight: 200;
  line-height: 70px;
  @media(max-width: 768px){
    text-align: center;
    font-size: 20px;
    width: 100%;
    line-height: 2;
  }
}
img{
 // z-index:1;
  width:700px;
  height:670px;
  position: absolute;
 // bottom: -2px;
 right: 0px;
 top: 50px;
  @media(max-width: 768px){
    top: 230px;
    width: initial;
    position: initial;
    height: initial;
  }
}
`;
const Form = styled.div`
margin-top: 100px;
width: 408px;
@media(max-width: 768px){
  margin-top: 20px;
}`;

const Google = styled.button`
display: flex;
justify-content: center;
background-color: #fff;
align-items: center;
height: 56px;
width: 100%;
border-radius: 28px;
box-shadow: inset 0 0 0 1px rgb(0 0 0/ 60%),
inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
vertical-align: middle;
z-index: zero;
transition-duration: 167ms;
font-size: 20px;
color: rgba(0, 0, 0, 0.6);
&:hover {
  background-color: rgba(207, 207, 207, 0.25);
  color: rgba(0, 0, 0, 0.75);
}`;


const mapStateToProps = (state) =>{
  return {
    user: state.userState.user,
  };
}
const mapDispatchToProps = (dispatch) =>({
    signIn: () => dispatch(signInAPI())
})
 export default connect(mapStateToProps,mapDispatchToProps)(Log);

