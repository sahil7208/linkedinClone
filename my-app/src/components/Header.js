import { connect } from 'react-redux';
import styled from 'styled-components';
import {signOutAPI}  from './index';
const Header = (props) => {
    return (
        
        <Container> 
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="home-logo.svg" alt="" />
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                    <SearchIcon>
                        <img src="search-icon.svg" alt="" />
                    </SearchIcon>
                </Search>
                <Nav><NavListWrap>
                    <NavList id="active">
                        <a href ="home">
                            <img src="nav-home.svg" alt="" />
                            <span>Home</span>
                        </a>
                    </NavList>

                    <NavList>
                        <a href = "network" id = "Active">
                            <img src="nav-network.svg" alt="" />
                            <span>My Network</span>
                        </a>
                    </NavList>

                    <NavList>
                        <a id = "actives" href = "job">
                            <img src="nav-jobs.svg" alt="" />
                            <span>Jobs</span>
                        </a>
                    </NavList>

                    <NavList>
                        <a href ="messaging">
                            <img src="nav-messaging.svg" alt="" />
                            <span>Messaging</span>
                        </a>
                    </NavList>

                    <NavList>
                        <a href ="notification">
                            <img src="nav-notifications.svg" alt="" />
                            <span>Notifications</span>
                        </a>
                    </NavList>

                    <User>
                        <a>
                            {props.user && props.user.photoURL ? (<img src={props.user.photoURL} alt="" />) : (<img src={"user.svg"} alt="" />)}
                            <span>Me</span>
                            <img src="down-icon.svg" alt="" />
                        </a>
                        <SignOut onClick = {()=> props.signOut()}>
                            <a>Sign Out</a>
                        </SignOut>
                    </User>
                    <Work>
                        <a>
                            <img src="nav-work.svg" alt="" />
                            <span>
                                Work
                                <img src="down-icon.svg" alt="" />
                            </span>
                        </a>
                    </Work>
                </NavListWrap>
                </Nav>
            </Content>
        </Container>
    );
};
const Container = styled.div`
background-color: white;
border-bottom: 1px solid rgba(0, 0, 0, 0.08);
 left: 0;
 padding: 0 24px;
 position: fixed;
 top: 0;
 width: 100vw;
 z-index: 100;
 `;

const Content = styled.div`
display: flex;
align-items: center;
margin: 2px auto;
min-height: 100%;
max-width: 1283px;
`;

const Logo = styled.span`
margin-right: 8px;
font-size: 0px;
`;

const Search = styled.div`
opacity: 1;
flex-grow: 1;
position: relative;
& > div {
    max-width: 280px;
    input{
        border: none;
        box-shadow: none;
        background-color: #eef3f8;
        border-radius: 2px;
        color: rgba(0, 0, 0, 0.9);
        width: 218px;
        padding: 0px 8px 0px 40px;
        line-height: 1.75;
        font-weight: 400;
        font-size: 14px;
        height: 34px;
        bordor-color: #dce6f1;
        vertical-align: text-top;
    }
}`;

const SearchIcon = styled.div`
width: 40px;
position: absolute;
z-index: 1;
top: 10px;
left: 13px;
border-radius: 0 2px 2px 0;
margin: 0;
pointer-events: none;
display: flex;
justify-conent: center;
align-items: center;
`;

const Nav = styled.nav`
margin-left: auto;
display: block;
@media(max-width: 768px){
position: fixed;
left: -7px;
bottom: 0;
background: white;
width: 100%;
max-width: 395px;
//z-index:1;
}
`;

const NavListWrap = styled.ul`
display: flex;
flex-wrap: nowrap;
list-style-type: none;

// #active,#actives,#Active{
//     span:after{
//         content: "";
//         transform: scaleX(1);
//         border-bottom: 2px solid var(--white, #fff);
//         bottom: 0;
//         left: 0;
//         position: absolute;
//         transition: transform 0.2s ease-in-out;
//         width: 100%;
//         border-color: rgba(0, 0, 0, 0.9);
//     }
}
`;

const NavList = styled.li`
display: flex;
align-items: center;
a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span{
        color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
    }
    @media (max-width: 768px){
       max-width: 330px;
       overflow-x: hidden;
    }
}
&:hover{
    a{
        span{
         color: rgba(0, 0, 0, 0.9);
            
        }
    }
}

`;

const SignOut = styled.div`
position: absolute;
top: 45px;
background: white;
border-radius: 0 0 5px 5px;
width: 100px;
height: 40px;
font-size: 16px;
transition-duration: 167ms;
text-align: center;
display: none;
`;

const User = styled(NavList)`
a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
}
span{
    display: flex;
    align-items: center;
}
&:hover{
    ${SignOut} {
        align-items: center;
        display: flex;
        justify-content: center;
    }
}
`;

const Work = styled(User)`
border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

const mapStateToProps = (state) =>{
    return{
        user: state.userState.user,
    };
};
const mapDispatchToProps = (dispatch) =>({
    signOut: () => dispatch(signOutAPI()),
});


export default connect(mapStateToProps,mapDispatchToProps)(Header);